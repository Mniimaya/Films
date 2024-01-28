import AvatarHandler from '../../components/AvatarHandler/AvatarHandler';
import styles from './CabinetPage.module.scss';
import CabinetTabs from '../../components/CabinetTabs/CabinetTabs';
import PersonalBlock from '../../components/PersonalBlock/PersonalBlock';

const CabinetPage = () => {
  return (
    <div>
      <div className={styles.avatarWrapper}>
        <AvatarHandler />
        <div>
          <p className={styles.name}>Гость</p>
          <p className={styles.email}>myemailaddress@gmail.com</p>
        </div>
      </div>
      <CabinetTabs />
      <div>
        <PersonalBlock />
      </div>
    </div>
  );
};

export default CabinetPage;
