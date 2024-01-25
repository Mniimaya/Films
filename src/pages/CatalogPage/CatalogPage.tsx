import { Link } from "react-router-dom";
import Filter from "../../components/Filter/Filter";
import styles from "./CatalogPage.module.scss";

const CatalogPage = () => {
  return (
    <>
      <div className="container">
        <h1 className={styles.title}>Фильмы</h1>
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
