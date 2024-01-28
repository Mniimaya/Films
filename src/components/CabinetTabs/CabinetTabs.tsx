import styles from './CabinetTabs.module.scss';

const CabinetTabs = () => {
  return (
    <ul className={styles.list}>
      <li>
        <button className={`${styles.tabsButton} ${styles.tabsButtonActive}`} type="button">
          Профиль
        </button>
      </li>
      <li>
        <button className={styles.tabsButton} type="button">
          Избранное
        </button>
      </li>
      <li>
        <button className={styles.tabsButton} type="button">
          Истрория
        </button>
      </li>
    </ul>
  );
};

export default CabinetTabs;
