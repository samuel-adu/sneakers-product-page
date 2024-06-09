import { useState } from 'react';
import '../styles/lightbox.css';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import { IoClose } from 'react-icons/io5';

type LightboxProps = {
  isOpen: boolean;
  onClose: () => void;
  images: { alt: string; image: string; thumbnail: string }[];
};

function Lightbox({ isOpen, onClose, images }: LightboxProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function goToPrevious() {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function goToNext() {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  if (!isOpen) return null;
  return (
    <div className="lightbox__overlay" onClick={onClose}>
      <div
        className="lightbox__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button onClick={onClose} className="lightbox__close-btn">
          <IoClose />
        </button>

        <div className="lightbox__slider">
          <div className="lightbox__slider-content">
            {images.map((item, index) => (
              <div
                className="lightbox__slide"
                key={index}
                style={{ translate: `${-100 * imageIndex}%` }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="lightbox__image rounded-lg"
                />
              </div>
            ))}
          </div>
          <button
            className="lightbox__controls prev-btn"
            onClick={goToPrevious}
          >
            <PiCaretLeftBold />
          </button>
          <button className="lightbox__controls next-btn" onClick={goToNext}>
            <PiCaretRightBold />
          </button>
        </div>

        <div className="gallery w-[80%] mx-auto items-center">
          {images.map((item, index) => (
            <div className="gallery-overlay">
              <img
                onClick={() => setImageIndex(index)}
                src={item.thumbnail}
                alt={item.alt}
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
