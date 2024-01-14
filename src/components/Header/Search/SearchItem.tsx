import { Link } from 'react-router-dom';
import { IRootFilm } from '../../../TYPES/TYPES';
import styles from './Search.module.scss';
import { ENUM_PAGE } from '../../../TYPES/TYPES';
interface props {
  data: IRootFilm;
}

const SearchItem = ({ data }: props) => {
  const getRatingClass = (rating: number) => {
    return rating > 6 ? 'rating-good' : 'rating-bad';
  };

  const ratingClass = getRatingClass(data.rating.kp);
  return (
    <li>
      <Link className={styles.item} to={`${ENUM_PAGE[data.type as keyof typeof ENUM_PAGE]}/${data.id}`}>
        <div className={styles.preview}>
          <img src={data.poster.previewUrl} />
        </div>
        <div>
          <p className={styles.name}>{data.name}</p>
          <div className={styles.ratingWrapper}>
            <span className={`${styles.rating} ${ratingClass}`}>{String(data.rating.kp).slice(0, 3)}</span>
            <span className={styles.year}>{data.year}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SearchItem;
