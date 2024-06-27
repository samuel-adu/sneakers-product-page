import '../styles/header.css';
import { useState } from 'react';
import logo from '../assets/icons/logo.svg';
import hamburger from '../assets/icons/icon-menu.svg';
import menuClose from '../assets/icons/icon-close.svg';
import avatar from '../assets/images/image-avatar.png';
import { FaCartShopping } from 'react-icons/fa6';
import { useCartContext } from '@/hooks/useCartContext';

type HeaderProps = {
  showCartModal: boolean;
  openCartModal: () => void;
  closeCartModal: () => void;
};

function Header({ showCartModal, closeCartModal, openCartModal }: HeaderProps) {
  const { cartCount } = useCartContext();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <img src={menuClose} alt="menu close button" />
            ) : (
              <img src={hamburger} alt="menu open button" />
            )}
          </button>

          <img src={logo} alt="sneaker logo" className="logo" />

          <ul className={`nav__list ${menuOpen ? 'nav--open' : ''}`}>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Collections
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Men
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Women
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Contact
              </a>
            </li>
          </ul>

          <div className="cart-icon-container">
            <button
              className="cart-btn"
              onClick={showCartModal ? closeCartModal : openCartModal}
            >
              <FaCartShopping />
              {cartCount ? (
                <span className="cart-item-count">{cartCount}</span>
              ) : null}
            </button>
          </div>

          <img src={avatar} alt="avatar" className="avatar" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
