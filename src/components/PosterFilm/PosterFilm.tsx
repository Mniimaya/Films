import styles from './PosterFilm.module.scss';
import { T_COUNTRY, T_GENRE, T_ROOT_FILM } from '../../TYPES/TYPES';

const PosterFilm = (props: T_ROOT_FILM) => {
  const renderArray = (array: T_COUNTRY[] | T_GENRE[]) => {
    if (array.length > 0) {
      const filterArray = array.map((item) => item.name);
      return filterArray.join(', ');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <img src={props.backdrop.url} />
      </div>

      <div className={styles.descriptionWrapper}>
        <h1 className={styles.title}>{props.name}</h1>
        <p className={styles.features}>
          <span>Оценка: {String(props.rating.kp).slice(0, 3)}</span>
          <span>Производство: {renderArray(props.countries)}</span>
          <span>Жанр: {renderArray(props.genres)}</span>
          <span>Год выпуска: {props.year} г.</span>
          {!!props.movieLength ? <span>Время: {props.movieLength} мин.</span> : ''}
          {!!props.ageRating && <span className={styles.age}>{props.ageRating}+</span>}
        </p>
        <p className={styles.description}>{props.description}</p>
      </div>
    </div>
  );
};

export default PosterFilm;
