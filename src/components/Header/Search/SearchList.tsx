import { IFilterMovie } from '../../../TYPES/TYPES';
import { useAppDispatch } from '../../../hooks/hookRedux';
import { updateValue } from '../../../store/slises/searchSlice';
import styles from './Search.module.scss';
import SearchItem from './SearchItem';

interface props {
  data: IFilterMovie | null;
}

const SearchList = ({ data }: props) => {
  const dispatch = useAppDispatch();
  const handlerResetSearch = () => {
    dispatch(updateValue(''));
  };

  return (
    <div className={`${styles.container} ${!!!data?.docs.length && styles.noDataContainer}`}>
      <div className={styles.innerContainer}>
        <ul className={styles.list}>{data?.docs.length ? data.docs.map((item, i) => <SearchItem onClick={handlerResetSearch} data={item} key={i} />) : <li className={styles.noData}>Ничего не найдено</li>}</ul>
      </div>
    </div>
  );
};

export default SearchList;
