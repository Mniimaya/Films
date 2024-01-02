import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './CategorySlider.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { ENUM_PAGE, IFilterMovie } from '../../TYPES/TYPES';

interface props {
  data: IFilterMovie;
  title: string;
}

const CategorySlider = (props: props) => {
  const getRatingClass = (rating: number) => {
    return rating > 6 ? 'rating-good' : 'rating-bad';
  };

  const data = props.data.docs;

  return (
    <section className={styles.sectionSlider}>
      <div className="container">
        <div className={styles.containerTop}>
          <h2 className={styles.title}>{props.title}</h2>
          <Link to="/" className={styles.linkAll}>
            <span>Смотреть всё</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.26349 6.82637L1.43712 0L0 1.43712L6.82637 8.26349L5.94761e-05 15.0898L1.43718 16.5269L9.70063 8.26348L8.26351 6.82636L8.26349 6.82637Z" />
            </svg>
          </Link>
        </div>

        <Swiper spaceBetween={30} slidesPerView="auto">
          {data.length > 0
            ? data.map((item, i) => {
                return (
                  <SwiperSlide className={styles.slide} key={i}>
                    <Link to={`${ENUM_PAGE[item.type as keyof typeof ENUM_PAGE]}/${item.id}`}>
                      <div className={styles.imgWrapper}>
                        <img src={item.poster.previewUrl} />
                      </div>
                      <span className={`rating-card ${getRatingClass(item.rating.kp)}`}>{String(item.rating.kp).slice(0, 3)}</span>
                    </Link>
                    <div className={styles.linkWrapper}>
                      <Link to={`${ENUM_PAGE[item.type as keyof typeof ENUM_PAGE]}/${item.id}`} className={styles.linkTitle}>
                        {item.name}
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })
            : ''}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySlider;
