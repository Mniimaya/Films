import styles from '../Auth.module.scss';
import RegistrationForm from '../Forms/RegistrationForm';
import Logo from '../Logo';

const RegistrationPage = () => {
  return (
    <div className={`container ${styles.container}`}>
      <Logo />
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
