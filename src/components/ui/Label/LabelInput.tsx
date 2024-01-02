import styles from './LabelInput.module.scss';

type TYPE_PROPS = {
  type: string;
  placeholder?: string;
};

function LabelInput({ type, placeholder }: TYPE_PROPS) {
  return (
    <label>
      <input className={styles.input} type={type} placeholder={placeholder}></input>
    </label>
  );
}

export default LabelInput;
