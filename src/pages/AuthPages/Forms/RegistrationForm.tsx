import styles from './forms.module.scss';
import Input from '../../../components/ui/Input/Input';
import Button from '../../../components/ui/Button/Button';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  return (
    <div className={styles.formContainer}>
      <form>
        <fieldset>
          <label>
            <Input type="text" placeholder="Имя" />
          </label>
          <label>
            <Input type="email" placeholder="Email" />
          </label>
          <label>
            <Input type="password" placeholder="Пароль" />
          </label>
        </fieldset>
        <Button classAdd={styles.submit} type="submit" children="Регистрация" />
        <Link to="/auth/login" className={styles.link}>
          Уже есть аккаунт?
        </Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
