import React from 'react';
import styles from './CollectionPage.module.scss';
import CollectionList from '../../components/CollectionList/CollectionList';
import { dataCollection } from '../../data/dataCollection';
import { useParams } from 'react-router-dom';
import { getFilms } from '../../API/FilmApi';
import { T_FILTERMOVIE } from '../../TYPES/TYPES';
import PageTitle from '../../components/ui/PageTitle/PageTitle';
import ButtonSecondary from '../../components/ui/ButtonSecondary/ButtonSecondary';

type I_PARAMS = {
  collectionId: string;
};

const CollectionPage = () => {
  const params = useParams<I_PARAMS>();
  const nameCollection: string | undefined = dataCollection[params.collectionId as keyof typeof dataCollection].param;
  const title: string = dataCollection[params.collectionId as keyof typeof dataCollection].title;
  const [collection, setCollection] = React.useState<T_FILTERMOVIE>();
  React.useEffect(() => {
    nameCollection &&
      getFilms(nameCollection, 24).then((data) => {
        setCollection(data);
      });
  }, [params]);

  return (
    <div className="container container-vertical">
      <div className={styles.titleContainer}>
        <PageTitle name={title} />
      </div>
      {!!collection?.docs.length && (
        <div className={styles.listContainer}>
          <CollectionList collection={collection?.docs} />
        </div>
      )}
      <div className={styles.buttonWrapper}>
        <ButtonSecondary children="Показать еще" onClick={() => console.log(1)} />
      </div>
    </div>
  );
};

export default CollectionPage;
