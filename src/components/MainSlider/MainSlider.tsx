import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './MainSlider.module.scss';

import slideMob1 from '../../assets/img/main-slider/slide-mob-1.png';
import slideMob2 from '../../assets/img/main-slider/slide-mob-2.png';
import slideMob3 from '../../assets/img/main-slider/slide-mob-3.png';
import slideMob4 from '../../assets/img/main-slider/slide-mob-4.png';
import slideTablet1 from '../../assets/img/main-slider/slide-tablet-1.png';
import slideTablet2 from '../../assets/img/main-slider/slide-tablet-2.png';
import slideTablet3 from '../../assets/img/main-slider/slide-tablet-3.png';
import slideTablet4 from '../../assets/img/main-slider/slide-tablet-4.png';
import slideDesk1 from '../../assets/img/main-slider/slide-desk-1.png';
import slideDesk2 from '../../assets/img/main-slider/slide-desk-2.png';
import slideDesk3 from '../../assets/img/main-slider/slide-desk-3.png';
import slideDesk4 from '../../assets/img/main-slider/slide-desk-4.png';
import { Link } from 'react-router-dom';

const MainSlider = () => {
  return (
    <div className={styles.mainSlide__wrapper}>
      <Swiper
        className={styles.mainSlider}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation={{
          nextEl: `.${styles.mainSlider__buttonNext}`,
          prevEl: `.${styles.mainSlider__buttonPrev}`,
          disabledClass: 'swiper-button-disabled',
        }}
        pagination={{
          el: `.${styles.mainSlider__pagination}`,
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}"></span>`;
          },
        }}
        // scrollbar={{ draggable: true, el: ".mainSlide" }}
        breakpoints={{
          1280: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide className={styles.mainSlide}>
          <Link to="film/535341" className={styles.linkFilm}>
            <picture>
              <source srcSet={slideDesk1} media="(min-width: 1280px)" />
              <source srcSet={slideTablet1} media="(min-width: 768px)" />
              <img src={slideMob1} alt="Фильм." />
            </picture>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.mainSlide}>
          <Link to="film/1338502" className={styles.linkFilm}>
            <picture>
              <source srcSet={slideDesk2} media="(min-width: 1280px)" />
              <source srcSet={slideTablet2} media="(min-width: 768px)" />
              <img src={slideMob2} alt="Фильм." />
            </picture>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.mainSlide}>
          <Link to="film/1267348" className={styles.linkFilm}>
            <picture>
              <source srcSet={slideDesk3} media="(min-width: 1280px)" />
              <source srcSet={slideTablet3} media="(min-width: 768px)" />
              <img src={slideMob3} alt="Фильм." />
            </picture>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.mainSlide}>
          <Link to="film/1450722" className={styles.linkFilm}>
            <picture>
              <source srcSet={slideDesk4} media="(min-width: 1280px)" />
              <source srcSet={slideTablet4} media="(min-width: 768px)" />
              <img src={slideMob4} alt="Фильм." />
            </picture>
          </Link>
        </SwiperSlide>
      </Swiper>
      <div className={styles.mainSlider__navigation}>
        <button type="button" className={styles.mainSlider__buttonPrev}>
          <svg width="13" height="21" viewBox="0 0 13 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clippule="evenodd" d="M2.5107 11.831L10.7569 20.0771L12.4929 18.3411L4.24673 10.0949L12.4928 1.84883L10.7568 0.112797L0.774645 10.095L2.51067 11.831L2.5107 11.831Z" />
          </svg>
        </button>
        <div className={styles.mainSlider__pagination} />
        <button type="button" className={styles.mainSlider__buttonNext}>
          <svg width="13" height="21" viewBox="0 0 13 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.4893 9.16904L2.24311 0.922852L0.50708 2.65888L8.75327 10.9051L0.507157 19.1512L2.24319 20.8872L12.2254 10.905L10.4893 9.16901L10.4893 9.16904Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MainSlider;
