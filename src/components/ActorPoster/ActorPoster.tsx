import styles from './ActorPoster.module.scss';
import { T_PERSON } from '../../TYPES/TYPES';

type T_PROPS = {
  person: T_PERSON;
};

const ActorPoster = ({ person }: T_PROPS) => {
  const birthPlaceString = person.birthPlace?.map((item) => item.value).join(', ');
  const date = !!person.birthday && new Date(person.birthday).toLocaleDateString().split('').join('');
  return (
    <div className="container container-vertical">
      <div className={styles.posterWrapper}>
        <div className={styles.imgWrapper}>
          <img src={person.photo} alt={person.name} className={styles.img} />
        </div>
        <div className={styles.mediumWrapper}>
          <h2 className={styles.title}>{person.name}</h2>
          <div className={styles.wrapper}>
            <p>
              Дата рождения: <span> {`${date}, ${person.age}`}</span>
            </p>
            {birthPlaceString && (
              <p>
                Место рождения: <span> {birthPlaceString}</span>
              </p>
            )}

            <p>
              Всего фильмов: <span>{person.movies?.length}</span>
            </p>
            <ul className={styles.list}>{!!person.facts?.length && person.facts.map((fac, i) => <li key={i}>{fac.value}</li>)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorPoster;
