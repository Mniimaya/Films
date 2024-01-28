import { Link, useParams } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';
import styles from './CatalogPage.module.scss';
import { T_DATA_CATALOG, dataCatalog } from '../../data/dataCatalog';
import PageTitle from '../../components/ui/PageTitle/PageTitle';

type TYPE_PARAMS = {
  catalogId: string;
};

const CatalogPage = () => {
  const params = useParams<TYPE_PARAMS>();
  const catalogId = params.catalogId as keyof T_DATA_CATALOG;
  console.log(catalogId);
  return (
    <>
      <div className="container container-vertical">
        <div className={styles.titleContainer}>
          <PageTitle name={dataCatalog.films.title} />
        </div>
        <Filter />
        <ul>
          <li>
            <Link to="/">
              <div>
                <img src="" alt=""></img>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CatalogPage;
