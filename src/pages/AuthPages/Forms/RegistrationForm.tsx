import styles from './forms.module.scss';
import LabelInput from '../../../components/ui/Label/LabelInput';
import MainButton from '../../../components/ui/MainButton/MainButton';
import { NavLink } from 'react-router-dom';

const RegistrationForm = () => {
  return (
    <div className={styles.formContainer}>
      <form>
        <fieldset>
          <LabelInput type="text" placeholder="Имя" />
          <LabelInput type="email" placeholder="Email" />
          <LabelInput type="password" placeholder="Пароль" />
        </fieldset>
        <MainButton classAdd={styles.submit} type="submit" children="Регистрация" />
        <NavLink to="/login" className={styles.link}>
          Уже есть аккаунт?
        </NavLink>
      </form>
    </div>
  );
};

export default RegistrationForm;
