import Input from '../../../components/ui/Input/Input';
import Button from '../../../components/ui/Button/Button';
import styles from './forms.module.scss';
import { Link } from 'react-router-dom';
const AuthForm = () => {
  return (
    <div className={styles.formContainer}>
      <form>
        <fieldset>
          <label>
            <Input type="email" placeholder="Email" />
          </label>
          <label>
            <Input type="password" placeholder="Пароль" />
          </label>
        </fieldset>
        <Button onClick={() => console.log(123)} classAdd={styles.submit} type="submit">
          Войти
        </Button>
        <Link to="/auth/registaration" className={styles.link}>
          Ещё не зарегистрированы?
        </Link>
      </form>
    </div>
  );
};

export default AuthForm;
