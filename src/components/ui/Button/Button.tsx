import styles from './Button.module.scss';

interface props {
  children: React.ReactNode;
  classAdd: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: Function;
}

const Button = ({ children, classAdd, type = 'button', onClick }: props) => {
  return (
    <button className={`${styles.btn} ${classAdd}`} type={type} onClick={() => onClick}>
      {children}
    </button>
  );
};

export default Button;
