import { T_TRAILER } from '../../TYPES/TYPES';
import TrailerItem from './TrailerItem/TrailerItem';
import styles from './TrailerList.module.scss';

type T_PROPS = {
  data: T_TRAILER[];
};

const TrailerList = ({ data }: T_PROPS) => {
  const urlTrailer = data.map(({ url }) => url);
  const filterData = data.filter(({ url }, index) => !urlTrailer.includes(url, index + 1));
  return (
    <div className="container">
      <h2 className={styles.title}>Трейлеры</h2>
      <ul className={styles.list}>{!!filterData.length && filterData.map((item) => <TrailerItem url={item.url} name={item.name} />)}</ul>
    </div>
  );
};

export default TrailerList;
