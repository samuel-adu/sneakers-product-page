import '../styles/cart.css';
import { FaTrashCan, FaCartShopping } from 'react-icons/fa6';
import { useState } from 'react';
import { useCartContext } from '@/hooks/useCartContext';
import ProductImage from '../assets/images/image-product-1-thumbnail.jpg';

function Cart() {
  const { cart } = useCartContext();
  const [cartIsOpen, setCartIsOpen] = useState(false);
  return (
    <>
      <div className="cart-icon-container">
        <button onClick={() => setCartIsOpen(true)} className="cart-btn">
          <FaCartShopping />
          {cart.quantity > 0 && (
            <span className="cart-item-count">{cart.quantity}</span>
          )}
        </button>
      </div>

      {cartIsOpen && (
        <div onClick={() => setCartIsOpen(false)} className="modal-overlay">
          <div onClick={(event) => event.stopPropagation()} className="modal">
            <div className="modal-header">
              <h3 className="font-bold">Cart</h3>
            </div>

            <div className="modal-main">
              {cart.quantity < 1 ? (
                <p className="font-bold base-text">Your cart is empty.</p>
              ) : (
                <div className="flex items-center justify-between gap-4 w-full">
                  <img
                    src={ProductImage}
                    alt=""
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <div>
                    <p className="base-text">Fall Limited Edition Sneakers</p>
                    <div className="flex gap-2">
                      <p className="base-text">$125.00 x {cart.quantity}</p>
                      <p className="total-cost">
                        ${(125 * cart.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <button className="">
                    <FaTrashCan />
                  </button>
                </div>
              )}
            </div>

            {cart.quantity > 0 ? (
              <div className="modal-footer">
                <button
                  onClick={() => setCartIsOpen(false)}
                  className="btn btn--primary"
                >
                  Checkout
                </button>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
