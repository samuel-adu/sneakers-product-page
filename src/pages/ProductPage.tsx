import cartIcon from '../assets/icons/icon-cart.svg';
import minus from '../assets/icons/icon-minus.svg';
import plus from '../assets/icons/icon-plus.svg';
import ProductPreview from '../components/ProductPreview';
import { useCartContext } from '../hooks/useCartContext';
import { useState } from 'react';

function ProductPage() {
  const { addToCart } = useCartContext();
  const [quantity, setQuantity] = useState(0);

  const product = {
    name: 'Fall Limited Edition Sneakers',
    price: 125,
  };

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
          <ProductPreview />
          <div>
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

            <div className="add-to-cart-tab">
              <div className="quantity-tab">
                <button onClick={decreaseQuantity} className="plus-btn">
                  <img src={minus} alt="" />
                </button>

                <p className="count">{quantity}</p>

                <button onClick={increaseQuantity} className="minus-btn">
                  <img src={plus} alt="" />
                </button>
              </div>

              <button onClick={handleClick} className="btn--primary">
                <img src={cartIcon} alt="" className="" />
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
