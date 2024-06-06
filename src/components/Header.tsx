import '../styles/header.css';
import { useState } from 'react';
import logo from '../assets/icons/logo.svg';
import hamburger from '../assets/icons/icon-menu.svg';
import menuClose from '../assets/icons/icon-close.svg';
import avatar from '../assets/images/image-avatar.png';
import Cart from '../components/Cart';

function Header() {
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

          <Cart />

          <img src={avatar} alt="avatar" className="avatar" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
