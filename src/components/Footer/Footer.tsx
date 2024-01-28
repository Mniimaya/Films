import LinkClient from '../LinkClient/LinkClient';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
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
            <Link to="catalog/films">Фильмы</Link>
          </li>
          <li>
            <Link to="catalog/series">Сериалы</Link>
          </li>
          <li>
            <Link to="catalog/mult">Мультфильмы</Link>
          </li>
        </ul>
        <LogoFooter />
      </div>
    </footer>
  );
};

export default Footer;
