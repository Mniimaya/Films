import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { T_PERSON } from '../../TYPES/TYPES';
import styles from './ActorsSlider.module.scss';
import actorImg from '../../assets/img/actor-template.png';
import { Link } from 'react-router-dom';

type T_PROPS = {
  persons: T_PERSON[];
};

const ActorsSlider = (props: T_PROPS) => {
  return (
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>Актёры</h2>
      <div className={styles.swiperContainer}>
        <Swiper
          spaceBetween={30}
          modules={[Navigation]}
          slidesPerView="auto"
          navigation={{
            nextEl: `.${styles.actor__buttonNext}`,
            prevEl: `.${styles.actor__buttonPrev}`,
            disabledClass: 'swiper-button-disabled',
          }}
        >
          {props.persons.map((pers, i) => {
            return (
              <SwiperSlide key={i} className={styles.slide}>
                <Link to="/" className={styles.imgWrapper}>
                  <img src={pers.photo || actorImg} alt={pers.name}></img>
                </Link>
                <Link to="/" className={styles.name}>
                  {pers.name}
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button type="button" className={styles.actor__buttonNext}></button>
        <button type="button" className={styles.actor__buttonPrev}></button>
      </div>
    </div>
  );
};

export default ActorsSlider;
