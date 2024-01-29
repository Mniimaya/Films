import React from 'react';
import styles from './CollectionPage.module.scss';
import CollectionList from '../../components/CollectionList/CollectionList';
import { dataCollection } from '../../data/dataCollection';
import { useParams } from 'react-router-dom';
import { getFilms } from '../../API/FilmApi';
import { T_ROOT_FILM } from '../../TYPES/TYPES';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import ButtonSecondary from '../../components/ui/ButtonSecondary/ButtonSecondary';

type I_PARAMS = {
  collectionId: string;
};

const INITIAL_STATE_INDEX = 27;

const CollectionPage = () => {
  const params = useParams<I_PARAMS>();
  const nameCollection: string | undefined = dataCollection[params.collectionId as keyof typeof dataCollection].param;
  const title: string = dataCollection[params.collectionId as keyof typeof dataCollection].title;
  const [collection, setCollection] = React.useState<T_ROOT_FILM[]>([]);
  const lengthCollection = collection.length;
  const [index, setIndex] = React.useState(INITIAL_STATE_INDEX);
  const renderArray = collection.slice(0, index);
  console.log(renderArray);

  React.useEffect(() => {
    nameCollection &&
      getFilms(nameCollection, 250).then((data) => {
        setCollection(data.docs);
      });

    return () => {
      setIndex(INITIAL_STATE_INDEX);
    };
  }, [params]);

  const showMore = () => {
    if (lengthCollection <= index + INITIAL_STATE_INDEX) {
      setIndex(lengthCollection);
    } else {
      setIndex(index + INITIAL_STATE_INDEX);
    }
  };

  return (
    <div className="container container-vertical">
      <div className={styles.titleContainer}>
        <PageTitle name={title} />
      </div>

      {!!collection.length && <div className={styles.listContainer}>{renderArray && <CollectionList collection={renderArray} />}</div>}
      <div className={styles.buttonWrapper}>{lengthCollection !== index && <ButtonSecondary children="Показать еще" onClick={() => showMore()} />}</div>
    </div>
  );
};

export default CollectionPage;
