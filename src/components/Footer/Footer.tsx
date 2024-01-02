import LinkClient from '../LinkClient/LinkClient';
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';
import LogoFooter from './LogoFooter';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <ul className={styles.footerList}>
          <li>
            <LinkClient />
          </li>
          <li>
            <NavLink to="films">Фильмы</NavLink>
          </li>
          <li>
            <NavLink to="films">Сериалы</NavLink>
          </li>
          <li>
            <NavLink to="films">Мультфильмы</NavLink>
          </li>
          <li>
            <NavLink to="films">Весь каталог</NavLink>
          </li>
        </ul>
        <LogoFooter />
      </div>
    </footer>
  );
};

export default Footer;
