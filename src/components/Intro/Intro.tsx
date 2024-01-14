import Button from '../ui/Button/Button';
import MainSlider from '../MainSlider/MainSlider';
import styles from './Intro.module.scss';
const Intro = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <MainSlider />
        <div className={styles.introContent}>
          <h2 className={styles.content}>
            Погрузитесь во вселенную <b>бесконечного</b> контента и каналов
          </h2>
          <Button type="button" classAdd={styles.button}>
            Начните бесплатно
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
