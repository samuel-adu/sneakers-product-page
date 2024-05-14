import { useState } from 'react';
import logo from '../assets/icons/logo.svg';
import hamburger from '../assets/icons/icon-menu.svg';
import menuClose from '../assets/icons/icon-close.svg';
import cart from '../assets/icons/icon-cart.svg';
import avatar from '../assets/images/image-avatar.png';
import '../styles/header.css';

type HeaderProps = {
  count: number;
};

function Header({ count }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <nav className="nav">
          <div className="">
            <button
              className="menu-btn"
              onClick={() => setMenuOpen((prevMenuOpen) => !prevMenuOpen)}
            >
              {menuOpen ? (
                <img src={menuClose} alt="menu close button" />
              ) : (
                <img src={hamburger} alt="menu open button" />
              )}
            </button>
            <img src={logo} alt="sneaker logo" className="logo" />
          </div>

          <ul className="nav-list">
            <li className="nav-item">Collections</li>
            <li className="nav-item">Men</li>
            <li className="nav-item">Women</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>

          <div>
            <div className="cart-icon-container">
              <img src={cart} alt="cart" />
              {count < 1 ? '' : <span className="order-count">{count}</span>}
            </div>
            <img src={avatar} alt="avatar" className="avatar" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
