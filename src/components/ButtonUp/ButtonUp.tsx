import React from 'react';
import styles from './ButtonUp.module.scss';

const ButtonUp = () => {
  const [hidden, setHidden] = React.useState(true);

  const handlerVisible = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollY > 1500 ? setHidden(false) : setHidden(true);
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handlerVisible);
    return () => {
      window.removeEventListener('scroll', handlerVisible);
      length;
    };
  }, []);

  return (
    <button className={`${styles.button} ${hidden && styles.hidden}`} type="button" onClick={() => window.scroll(0, 0)}>
      <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" width="50" height="50" viewBox="0 0 50 50" fill="none">
        <path d="M25 47.5C12.5736 47.5 2.5 37.4264 2.5 25C2.5 12.5736 12.5736 2.5 25 2.5C37.4264 2.5 47.5 12.5736 47.5 25C47.5 37.4264 37.4264 47.5 25 47.5Z" stroke="#E13C52" stroke-width="5" />
        <path d="M25 16.0732V33.0732" stroke-width="3" stroke-linecap="round" />
        <path d="M24.9204 16.001L18.0735 23.1453" stroke-width="3" stroke-linecap="round" />
        <path d="M25.0712 16.0109L32.1759 23.0483" stroke-width="3" stroke-linecap="round" />
      </svg>
    </button>
  );
};

export default ButtonUp;
