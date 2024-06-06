import '../styles/cart.css';
import cartIcon from '../assets/icons/icon-cart.svg';
import { useState } from 'react';
import { useCartContext } from '@/hooks/useCartContext';

function Cart() {
  const { cart } = useCartContext();
  const [cartIsOpen, setCartIsOpen] = useState(false);
  return (
    <>
      <div className="cart-icon-container">
        <button onClick={() => setCartIsOpen(true)} className="cart-btn">
          <img src={cartIcon} alt="cart" />
          {cart.quantity > 0 && (
            <span className="cart-item-count">{cart.quantity}</span>
          )}
        </button>
      </div>

      {cartIsOpen && (
        <div onClick={() => setCartIsOpen(false)} className="modal-overlay">
          <div onClick={(event) => event.stopPropagation()} className="modal">
            <div className="modal-header">
              <h3>Cart</h3>
            </div>
            <div className="modal-main">
              <p>your cart has {cart.quantity} items</p>
            </div>
            <div className="modal-footer">
              <button className="btn--primary">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
