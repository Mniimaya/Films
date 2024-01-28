import { Link } from 'react-router-dom';
import styles from './CardFilm.module.scss';
import { IRootFilm } from '../../TYPES/TYPES';
import imgTemplate from '../../assets/img/film-template.png';

interface I_PROPS {
  item: IRootFilm;
}

const CardFilm = ({ item }: I_PROPS) => {
  const getRatingClass = (rating: number) => {
    return rating > 6 ? 'rating-good' : 'rating-bad';
  };
  return (
    <li className={styles.item}>
      <Link to={`/film/${item.id}`}>
        <div className={styles.imgWrapper}>
          <img src={item.poster.previewUrl || imgTemplate} />
        </div>
        <span className={`rating-card ${getRatingClass(item.rating.kp)}`}>{String(item.rating.kp).slice(0, 3)}</span>
      </Link>
      <div className={styles.linkWrapper}>
        <Link to={`/film/${item.id}`} className={styles.linkTitle}>
          {item.name}
        </Link>
      </div>
    </li>
  );
};

export default CardFilm;
