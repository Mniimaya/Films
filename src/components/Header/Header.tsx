import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import LinkClient from '../LinkClient/LinkClient';
import Logo from './Logo';

function Header() {
  const location = useLocation();
  const path = location.pathname;
  const [isOpen, setIsOpen] = React.useState(false);

  const handlerMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={`${styles.header} ${path !== '/' ? styles.headerOpacity : ''}`}>
      <div className={`container ${styles.container}`}>
        <Link to="/" className={styles.logoLink}>
          <Logo></Logo>
        </Link>
        <div className={`${styles.navContainer} ${isOpen ? styles.active : ''}`}>
          <nav className={`${styles.nav} navigation`}>
            <ul>
              <li>
                <NavLink to="films">Фильмы</NavLink>
              </li>
              <li>
                <NavLink to="serials">Сериалы</NavLink>
              </li>
              <li>
                <NavLink to="">Мультфильмы</NavLink>
              </li>
              <li>
                <NavLink to="">Весь каталог</NavLink>
              </li>
            </ul>
          </nav>
          <div className={styles.search}>
            <label>
              <button type="button">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.5 21.8612L17.014 17.3672L21.5 21.8612ZM19.5 11.3612C19.5 13.6155 18.6045 15.7775 17.0104 17.3716C15.4163 18.9656 13.2543 19.8612 11 19.8612C8.74566 19.8612 6.58365 18.9656 4.98959 17.3716C3.39553 15.7775 2.5 13.6155 2.5 11.3612C2.5 9.10684 3.39553 6.94483 4.98959 5.35077C6.58365 3.75671 8.74566 2.86118 11 2.86118C13.2543 2.86118 15.4163 3.75671 17.0104 5.35077C18.6045 6.94483 19.5 9.10684 19.5 11.3612V11.3612Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <input type="search" placeholder="Поиск" />
            </label>
          </div>
          <LinkClient secondaryClass="client" />
        </div>
        <button className={`${styles.buttonMenu} ${isOpen ? styles.active : ''}`} onClick={() => handlerMobileMenu()} type="button" title="Открыть или закрыть меню.">
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
