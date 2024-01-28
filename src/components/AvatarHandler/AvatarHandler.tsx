import avatar from '../../assets/img/avatar.svg';
import styles from './AvatarHandler.module.scss';

const AvatarHandler = () => {
  return (
    <div>
      <label htmlFor="avatar" className={styles.avatar}>
        <img src={avatar} />
      </label>
      <input id="avatar" className="visually-hidden" type="file" name="avatar" />
    </div>
  );
};

export default AvatarHandler;
