import styles from './CollectionList.module.scss';
import { T_ROOT_FILM } from '../../TYPES/TYPES';
import CardFilm from '../CardFilm/CardFilm';
import { useAppSelector } from '../../hooks/hookRedux';
import CardLoader from '../CardLoader/CardLoader';

type PROPS = {
  collection: T_ROOT_FILM[];
  count: number;
};

const CollectionList = ({ collection, count }: PROPS) => {
  const isLoading = useAppSelector((state) => state.loading.isLoading);
  return <ul className={styles.list}>{isLoading ? [...new Array(count)].map((_item, i) => <CardLoader key={i} />) : collection.map((item) => <CardFilm item={item} />)}</ul>;
};

export default CollectionList;
