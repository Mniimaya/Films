import { IFilterMovie } from '../../../TYPES/TYPES';
import styles from './Search.module.scss';
import SearchItem from './SearchItem';

interface props {
  data: IFilterMovie;
}

const SearchList = ({ data }: props) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {data.docs.map((item, i) => (
          <SearchItem data={item} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default SearchList;
