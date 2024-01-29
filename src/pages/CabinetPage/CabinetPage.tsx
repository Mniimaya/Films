import AvatarHandler from '../../components/AvatarHandler/AvatarHandler';
import styles from './CabinetPage.module.scss';
import CabinetTabs from '../../components/CabinetTabs/CabinetTabs';
import PersonalBlock from '../../components/PersonalBlock/PersonalBlock';

const CabinetPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.navbarContainer}>
          <div className={styles.avatarWrapper}>
            <AvatarHandler />
            <div className={styles.nameWrapper}>
              <p className={styles.name}>Гость</p>
              <p className={styles.email}>myemailaddress@gmail.com</p>
            </div>
          </div>

          <CabinetTabs />
        </div>
        <div className={styles.blocksWrapper}>
          <PersonalBlock />
        </div>
      </div>
    </div>
  );
};

export default CabinetPage;
