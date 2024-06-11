import { FaCartShopping, FaMinus, FaPlus } from 'react-icons/fa6';
import '../styles/productPage.css';
import { useCartContext } from '../hooks/useCartContext';
import { useState } from 'react';
import Lightbox from '@/components/Lightbox';
import ImageSlider from '@/components/ImageSlider';

import Product1Image from '../assets/images/image-product-1.jpg';
import Product2Image from '../assets/images/image-product-2.jpg';
import Product3Image from '../assets/images/image-product-3.jpg';
import Product4Image from '../assets/images/image-product-4.jpg';

import Product1Thumbnail from '../assets/images/image-product-1-thumbnail.jpg';
import Product2Thumbnail from '../assets/images/image-product-2-thumbnail.jpg';
import Product3Thumbnail from '../assets/images/image-product-3-thumbnail.jpg';
import Product4Thumbnail from '../assets/images/image-product-4-thumbnail.jpg';

const product = {
  name: 'Fall Limited Edition Sneakers',
  price: 125,
  thumbnail: Product1Thumbnail,
  images: [
    { image: Product1Image, thumbnail: Product1Thumbnail, alt: 'Product1' },
    { image: Product2Image, thumbnail: Product2Thumbnail, alt: 'Product2' },
    { image: Product3Image, thumbnail: Product3Thumbnail, alt: 'Product3' },
    { image: Product4Image, thumbnail: Product4Thumbnail, alt: 'Product4' },
  ],
};

function ProductPage() {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  function openLightbox() {
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function handleClick() {
    addToCart(product, quantity);
  }

  return (
    <main>
      <div className="container">
        <div className="product-page">
          <div className="product-preview">
            <div className="">
              <ImageSlider
                images={product.images}
                openLightbox={openLightbox}
              />
            </div>

            <Lightbox
              images={product.images}
              isOpen={lightboxOpen}
              onClose={closeLightbox}
            />
          </div>

          <div className="product-details">
            <h1 className="company-name">sneaker company</h1>
            <h2 className="product-name">fall limited edition sneakers</h2>
            <p className="product-desc">
              These low-profile sneakers are perfect casual wear companion.
              Featuring a durable rubber outter sole, they'll withstand
              everything the weather can offer.
            </p>

            <div className="price-tab">
              <div className="new-price">
                <p className="price">$125.00</p>
                <p className="discount">50%</p>
              </div>
              <p className="old-price">$250.00</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-4 justify-between">
              <div className="quantity-tab lg:w-2/5">
                <button
                  onClick={decreaseQuantity}
                  className="btn btn--secondary"
                >
                  <FaMinus className="" />
                </button>

                <p className="count text-xl">{quantity}</p>

                <button
                  onClick={increaseQuantity}
                  className="btn btn--secondary"
                >
                  <FaPlus className="" />
                </button>
              </div>

              <button onClick={handleClick} className="btn btn--primary">
                <FaCartShopping />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
