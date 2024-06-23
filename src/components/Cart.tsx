import '../styles/cart.css';
import CartItem from './CartItem';
import { useCartContext } from '@/hooks/useCartContext';

function Cart() {
  const { cartItems, closeCartModal, clearCart } = useCartContext();

  function handleCheckout() {
    clearCart();
    closeCartModal();
  }

  if (cartItems.length < 1) {
    return (
      <div className="cart-main">
        <p className="font-bold base-text text-center">Your cart is empty.</p>
      </div>
    );
  }

  const cartList = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  return (
    <div className="cart-main">
      <div className="cart-list">{cartList}</div>
      <button className="btn btn--primary" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
