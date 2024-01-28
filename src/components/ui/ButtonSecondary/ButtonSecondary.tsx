import React from 'react';
import styles from './ButtonSecondary.module.scss';

type T_PROPS = {
  children: React.ReactNode;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: Function;
};

const ButtonSecondary = ({ children, type = 'button', onClick }: T_PROPS) => {
  return (
    <button className={`${styles.btn}`} type={type} onClick={() => onClick}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
