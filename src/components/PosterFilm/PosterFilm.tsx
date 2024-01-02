import React from 'react';
import styles from './PosterFilm.module.scss';
import MainButton from '../ui/MainButton/MainButton';
import { ICountry, IGenre, IRootFilm } from '../../TYPES/TYPES';

const PosterFilm = (props: IRootFilm) => {
  const renderArray = (array: ICountry[] | IGenre[]) => {
    if (array.length > 0) {
      const filterArray = array.map((item) => {
        return item.name;
      });

      return filterArray.join(', ');
    }
  };

  const [isOpenDescription, setIsOpenDescription] = React.useState(false);
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
          <span>Время: {props.movieLength} мин.</span>
          <span className={styles.age}>{props.ageRating}+</span>
        </p>
        <p className={`${styles.description} ${isOpenDescription ? 'active' : ''}`}>{props.description}</p>
        <button
          type="button"
          className={styles.buttonOpenDesc}
          onClick={() => {
            setIsOpenDescription(!isOpenDescription);
          }}
        >
          {isOpenDescription ? 'Скрыть' : 'Показать всё'}
        </button>

        <MainButton classAdd={styles.buttonWatch} type="submit" children="Смотреть сейчас" />
      </div>
    </div>
  );
};

export default PosterFilm;
