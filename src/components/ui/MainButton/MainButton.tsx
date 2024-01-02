import styles from './MainButton.module.scss';
import { ButtonTypes } from '../../../utils/ENUMS';

interface props {
  children: React.ReactNode;
  classAdd: string;
  type: ButtonTypes;
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
