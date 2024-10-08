import { FaCartShopping, FaMinus, FaPlus } from 'react-icons/fa6';
import '../styles/productPage.css';
import { useCartContext } from '../hooks/useCartContext';
import { useState } from 'react';
import Lightbox from '@/components/Lightbox';
import ImageSlider from '@/components/ImageSlider';
import { product } from '../data';
import toast from 'react-hot-toast';

function ProductPage() {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  function openLightbox() {
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function handleAddToCart(quantity: number) {
    if (quantity > 0) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.cartImage,
        quantity: quantity,
      });
      toast.success('item added to cart');
    }
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
                  aria-label="decrease item quantity"
                  onClick={() =>
                    quantity > 1 &&
                    setQuantity((prevQuanity) => prevQuanity - 1)
                  }
                  className={`btn btn--secondary ${
                    quantity === 1 ? 'disabled' : ''
                  }`}
                >
                  <FaMinus className="" />
                </button>

                <p className="count text-xl">{quantity}</p>

                <button
                  aria-label="increase item quantity"
                  onClick={() => setQuantity((prevQuanity) => prevQuanity + 1)}
                  className="btn btn--secondary"
                >
                  <FaPlus className="" />
                </button>
              </div>

              <button
                onClick={() => handleAddToCart(quantity)}
                className="btn btn--primary"
              >
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
