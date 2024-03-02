import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './CategorySlider.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { T_FILTERMOVIE } from '../../TYPES/TYPES';
import CardFilm from '../CardFilm/CardFilm';
import CardLoader from '../CardLoader/CardLoader';
import { useAppSelector } from '../../hooks/hookRedux';

type T_PROPS = {
  data: T_FILTERMOVIE;
  title: string;
  collectionName: string;
};

const COUNT = 10;

const CategorySlider = (props: T_PROPS) => {
  const data = props.data.docs;
  const total = props.data.total;
  const isLoading = useAppSelector((state) => state.loading.isLoading);

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
        <div className={styles.swiperContainer}>
          <Swiper
            spaceBetween={30}
            slidesPerView="auto"
            modules={[Navigation]}
            navigation={{
              nextEl: `.${styles.slide__buttonNext}`,
              prevEl: `.${styles.slide__buttonPrev}`,
              disabledClass: 'swiper-button-disabled',
            }}
          >
            {isLoading
              ? [...new Array(COUNT)].map((_item, i) => <CardLoader key={i} />)
              : data.map((item, i) => {
                  return (
                    <SwiperSlide className={styles.slide} key={i}>
                      <CardFilm item={item} />
                    </SwiperSlide>
                  );
                })}
          </Swiper>
          <button type="button" className={styles.slide__buttonNext}></button>
          <button type="button" className={styles.slide__buttonPrev}></button>
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
