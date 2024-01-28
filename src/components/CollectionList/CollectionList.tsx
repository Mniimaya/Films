import styles from './CollectionList.module.scss';
import { T_ROOT_FILM } from '../../TYPES/TYPES';
import CardFilm from '../CardFilm/CardFilm';

type PROPS = {
  collection: T_ROOT_FILM[];
};

const CollectionList = ({ collection }: PROPS) => {
  return <ul className={styles.list}>{!!collection.length && collection.map((item) => <CardFilm item={item} />)}</ul>;
};

export default CollectionList;
