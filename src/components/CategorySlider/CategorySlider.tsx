import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CategorySlider.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { T_FILTERMOVIE } from '../../TYPES/TYPES';
import CardFilm from '../CardFilm/CardFilm';

type T_PROPS = {
  data: T_FILTERMOVIE;
  title: string;
  collectionName: string;
};

const CategorySlider = (props: T_PROPS) => {
  const data = props.data.docs;
  const total = props.data.total;

  return (
    <section className={styles.sectionSlider}>
      <div className="container">
        <div className={styles.containerTop}>
          <Link to={`/collection/${props.collectionName}`} className={styles.title}>
            {props.title}
          </Link>
          {total > 10 && (
            <Link to={`/collection/${props.collectionName}`} className={styles.linkAll}>
              <span>Смотреть всё</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.26349 6.82637L1.43712 0L0 1.43712L6.82637 8.26349L5.94761e-05 15.0898L1.43718 16.5269L9.70063 8.26348L8.26351 6.82636L8.26349 6.82637Z" />
              </svg>
            </Link>
          )}
        </div>

        <Swiper spaceBetween={30} slidesPerView="auto">
          {!!data.length &&
            data.map((item, i) => {
              return (
                <SwiperSlide className={styles.slide} key={i}>
                  <CardFilm item={item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySlider;
