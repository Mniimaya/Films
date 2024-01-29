import styles from './CabinetTabs.module.scss';

const CabinetTabs = () => {
  return (
    <ul className={styles.list}>
      <li>
        <button className={`${styles.tabsButton} ${styles.tabsButtonActive}`} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM19.3995 17.1246C20.4086 15.6703 21 13.9042 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.9042 3.59138 15.6703 4.6005 17.1246C5.72595 15.6381 8.3706 15 12 15C15.6294 15 18.274 15.6381 19.3995 17.1246ZM17.9647 18.7398C17.672 17.6874 15.5694 17 12 17C8.43062 17 6.328 17.6874 6.03532 18.7398C7.6233 20.1462 9.71194 21 12 21C14.2881 21 16.3767 20.1462 17.9647 18.7398ZM12 15C9.76086 15 8 13.4274 8 10C8 7.75576 9.5791 6 12 6C14.4142 6 16 7.92158 16 10.2C16 13.4796 14.2181 15 12 15ZM10 10C10 12.2693 10.8182 13 12 13C13.1777 13 14 12.2984 14 10.2C14 8.95042 13.2157 8 12 8C10.7337 8 10 8.81582 10 10Z"
              fill="white"
            />
          </svg>
          Профиль
        </button>
      </li>
      <li>
        <button className={styles.tabsButton} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 2C0 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2ZM6 1H20V3H6V1ZM20 7H6V9H20V7ZM6 15H20V13H6V15ZM0 14C0 15.1046 0.89543 16 2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.89543 12 0 12.8954 0 14ZM2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6C3.10457 6 4 6.89543 4 8C4 9.10457 3.10457 10 2 10Z"
              fill="white"
            />
          </svg>
          Избранное
        </button>
      </li>
      <li>
        <button className={styles.tabsButton} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 15V2H14V15C14 15.3506 14.0602 15.6872 14.1707 16H3C2.44772 16 2 15.5523 2 15ZM17 18H3C1.34315 18 0 16.6569 0 15V0H14H15H16V5H20V6V7V15C20 16.6569 18.6569 18 17 18ZM16 7H18V15C18 15.5523 17.5523 16 17 16C16.4477 16 16 15.5523 16 15V7ZM8 4V8H4V4H8ZM12 7V5H9V7H12ZM12 9V11H4V9H12ZM12 14V12H4V14H12Z"
              fill="white"
            />
          </svg>
          Истрория
        </button>
      </li>
    </ul>
  );
};

export default CabinetTabs;
