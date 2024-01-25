import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IPerson } from '../../TYPES/TYPES';
import styles from './Actors.module.scss';
import actorImg from '../../assets/img/actor-template.png';
import { Link } from 'react-router-dom';

interface props {
  persons: IPerson[];
}

const Actors = (props: props) => {
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

export default Actors;
