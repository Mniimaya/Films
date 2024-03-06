import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import LinkClient from '../LinkClient/LinkClient';
import Logo from './Logo';
import Search from './Search/Search';
import { toggle } from '../../store/slises/headerSlice';
import { handlerSearch } from '../../store/slises/searchSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hookRedux';

function Header() {
  const location = useLocation();
  const path = location.pathname;
  const isOpen = useAppSelector((state) => state.header.isOpen);
  const dispatch = useAppDispatch();
  const handlerMobileMenu = (isOpen: boolean) => {
    dispatch(toggle(isOpen));
    dispatch(handlerSearch(false));
  };

  return (
    <header className={`${styles.header} ${isOpen && styles.headerDark} ${path !== '/' && styles.headerOpacity}`}>
      <div className={`container ${styles.container}`}>
        <Link onClick={() => handlerMobileMenu(false)} to="/" className={styles.logoLink}>
          <Logo></Logo>
        </Link>
        <div className={`${styles.navContainer} ${isOpen ? styles.active : ''}`}>
          <nav className={`${styles.nav} navigation`}>
            <ul>
              <li>
                <Link onClick={() => handlerMobileMenu(false)} to="catalog/films">
                  Фильмы
                </Link>
              </li>
              <li>
                <Link onClick={() => handlerMobileMenu(false)} to="catalog/series">
                  Сериалы
                </Link>
              </li>
              <li>
                <Link onClick={() => handlerMobileMenu(false)} to="catalog/mult">
                  Мультфильмы
                </Link>
              </li>
            </ul>
          </nav>
          <Search />
          <LinkClient onClick={() => handlerMobileMenu(false)} secondaryClass="client" />
        </div>
        <button className={`${styles.buttonMenu} ${isOpen ? styles.active : ''}`} onClick={() => handlerMobileMenu(!isOpen)} type="button" title="Открыть или закрыть меню.">
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
