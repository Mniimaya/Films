import { Link } from 'react-router-dom';
import { T_ROOT_FILM } from '../../../TYPES/TYPES';
import styles from './Search.module.scss';
import { ENUM_PAGE } from '../../../TYPES/TYPES';
import imgFilm from '../../../assets/img/film-template.png';

type T_PROPS = {
  data: T_ROOT_FILM;
  onClick: Function;
};

const SearchItem = ({ data, onClick }: T_PROPS) => {
  const getRatingClass = (rating: number) => {
    return rating > 6 ? 'rating-good' : 'rating-bad';
  };

  const rating = +String(data.rating.kp).slice(0, 3);

  const ratingClass = getRatingClass(data.rating.kp);
  return (
    <li onClick={() => onClick()}>
      <Link className={styles.item} to={`${ENUM_PAGE[data.type as keyof typeof ENUM_PAGE]}/${data.id}`}>
        <div className={styles.preview}>
          <img src={data.poster.previewUrl || imgFilm} />
        </div>
        <div>
          <p className={styles.name}>{data.name}</p>
          <div className={styles.ratingWrapper}>
            {!!rating && <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>}
            <span className={styles.year}>{data.year}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SearchItem;
