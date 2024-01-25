import { Link, useParams } from 'react-router-dom';
import Filter from '../../components/Filter/Filter';
import styles from './CatalogPage.module.scss';
import { I_DATA_CATALOG, dataCatalog } from '../../data/dataCatalog';

type TYPE_PARAMS = {
  catalogId: string;
};

const CatalogPage = () => {
  const params = useParams<TYPE_PARAMS>();
  const catalogId = params.catalogId as keyof I_DATA_CATALOG;
  console.log(catalogId);
  return (
    <>
      <div className="container">
        <h1 className={styles.title}>{dataCatalog.films.title}</h1>
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