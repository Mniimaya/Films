import { ITrailer } from '../../TYPES/TYPES';
import TrailerItem from './TrailerItem/TrailerItem';
import styles from './TrailerList.module.scss';

interface props {
  data: ITrailer[];
}

const TrailerList = ({ data }: props) => {
  return (
    <div className="container">
      <h2 className={styles.title}>Трейлеры</h2>
      <ul className={styles.list}>{!!data.length && data.map((item) => <TrailerItem url={item.url} name={item.name} />)}</ul>
    </div>
  );
};

export default TrailerList;
