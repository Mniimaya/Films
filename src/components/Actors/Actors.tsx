import { Swiper, SwiperSlide } from 'swiper/react';
import { IPerson } from '../../TYPES/TYPES';
import styles from './Actors.module.scss';
import actorImg from '../../assets/img/actor-template.png';

interface props {
  persons: IPerson[];
}

const Actors = (props: props) => {
  return (
    <div className={`container ${styles.container}`}>
      <h2 className={styles.title}>Акртёры</h2>
      <Swiper spaceBetween={30} slidesPerView="auto">
        {props.persons.map((pers, i) => {
          return (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.imgWrapper}>
                <img src={pers.photo || actorImg} alt={pers.name}></img>
              </div>
              <p className={styles.name}>{pers.name}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Actors;
