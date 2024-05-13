import cart from '../assets/icons/icon-cart.svg';
import '../styles/button.css';

function Button() {
  return (
    <button className="add-to-cart">
      <img src={cart} alt="" className="cart" />
      Add to cart
    </button>
  );
}

export default Button;
