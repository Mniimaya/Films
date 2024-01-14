import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import LinkClient from '../LinkClient/LinkClient';
import Logo from './Logo';
import Search from './Search/Search';

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
                <NavLink to="series">Сериалы</NavLink>
              </li>
              <li>
                <NavLink to="">Мультфильмы</NavLink>
              </li>
              <li>
                <NavLink to="">Весь каталог</NavLink>
              </li>
            </ul>
          </nav>
          <Search />
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
