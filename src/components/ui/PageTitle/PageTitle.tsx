import styles from './PageTitle.module.scss';
type T_PROPS = {
  name: string;
};

const PageTitle = ({ name }: T_PROPS) => {
  return <h1 className={styles.title}>{name}</h1>;
};

export default PageTitle;
