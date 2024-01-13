import AuthForm from '../Forms/AuthForm';
import styles from '../Auth.module.scss';
import Logo from '../Logo';

const LoginPage = () => {
  return (
    <div className={`${styles.container}`}>
      <Logo />
      <AuthForm />
    </div>
  );
};

export default LoginPage;
