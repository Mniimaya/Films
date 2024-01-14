import styles from './Input.module.scss';

type TYPE_PROPS = {
  type: 'text' | 'password' | 'email';
  placeholder?: string;
};

function Input({ type = 'text', placeholder }: TYPE_PROPS) {
  return <input className={styles.input} type={type} placeholder={placeholder}></input>;
}

export default Input;
