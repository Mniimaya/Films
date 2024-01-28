import React from 'react';
import styles from './ActorPoster.module.scss';

type T_PROPS = {
  photo: string;
  name: string;
};

const ActorPoster = ({ name, photo }: T_PROPS) => {
  return (
    <div>
      <div>
        <img src={photo} alt={name} />
      </div>
      <div>facts</div>
      <div>
        <h2>{name}</h2>
        <p>
          Дата рождения <span>{(birthday, age)}</span>
        </p>
        <p>
          Место рождения <span>{birthPlace}</span>
        </p>
        <p>Всего фильмов: {movies.lenth}</p>
      </div>
    </div>
  );
};

export default ActorPoster;
