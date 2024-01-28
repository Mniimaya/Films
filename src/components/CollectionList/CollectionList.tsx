import styles from './CollectionList.module.scss';
import { IRootFilm } from '../../TYPES/TYPES';
import CardFilm from '../CardFilm/CardFilm';

type PROPS = {
  collection: IRootFilm[];
};

const CollectionList = ({ collection }: PROPS) => {
  return <ul className={styles.list}>{!!collection.length && collection.map((item) => <CardFilm item={item} />)}</ul>;
};

export default CollectionList;
