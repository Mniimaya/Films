import styles from './MainButton.module.scss';
// import { ButtonTypes } from '../../../TYPES/TYPES';

interface props {
  children: React.ReactNode;
  classAdd: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const MainButton = ({ children, classAdd, type }: props) => {
  return (
    <button className={`${styles.btn} ${classAdd}`} type={type}>
      {' '}
      {children}
    </button>
  );
};

export default MainButton;
