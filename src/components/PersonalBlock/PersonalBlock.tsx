import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';
import styles from './PersonalBlock.module.scss';

const PersonalBlock = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Личные данные</h2>
      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend className="visually-hidden">Личная информация</legend>
          <label>
            <Input type="text" placeholder="Имя" />
          </label>
          <label>
            <Input type="email" placeholder="Email" />
          </label>
          <label>
            <Input type="password" placeholder="Имя" />
          </label>
        </fieldset>
      </form>
      <div className={styles.buttonContainer}>
        <Button type="button" children="Редактировать" />
      </div>
    </div>
  );
};

export default PersonalBlock;
