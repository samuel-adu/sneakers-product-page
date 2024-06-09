import '../styles/imageSlider.css';
import { useState } from 'react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

type ImageSliderProps = {
  images: { alt: string; image: string; thumbnail: string }[];
};

function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function goToPrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function goToNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="slider">
      <div className="slider-content">
        {images.map((item, index) => (
          <div
            className="slide"
            key={index}
            style={{ translate: `${-100 * currentIndex}%` }}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="slider-image rounded-lg"
            />
          </div>
        ))}
        <button className="left-arrow" onClick={goToPrevious}>
          <PiCaretLeftBold />
        </button>
        <button className="right-arrow" onClick={goToNext}>
          <PiCaretRightBold />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
