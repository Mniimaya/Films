import { Link } from 'react-router-dom';
import styles from './SimilarMovies.module.scss';
import { T_SIMILAR_MOVY } from '../../TYPES/TYPES';
import { Swiper, SwiperSlide } from 'swiper/react';
import imgTemplate from '../../assets/img/film-template.png';
import { Navigation } from 'swiper/modules';

type T_PROPS = {
  data: T_SIMILAR_MOVY[];
};

const SimilarMovies = ({ data }: T_PROPS) => {
  return (
    <div className={`${styles.wrapper} container`}>
      <h2 className={styles.title}>Похожие картины</h2>
      <div className={styles.swiperContainer}>
        <Swiper
          spaceBetween={30}
          slidesPerView="auto"
          modules={[Navigation]}
          navigation={{
            nextEl: `.${styles.film__buttonNext}`,
            prevEl: `.${styles.film___buttonPrev}`,
            disabledClass: 'swiper-button-disabled',
          }}
        >
          {data.length > 0
            ? data.map((item, i) => {
                return (
                  <SwiperSlide key={i} className={styles.item}>
                    <Link to={`../film/${item.id}`} className={styles.imgLink}>
                      <img className={styles.img} src={item.poster.previewUrl || imgTemplate} alt={item.name} />
                    </Link>
                    <Link className={styles.name} to={`film/${item.id}`}>
                      {item.name}
                    </Link>
                  </SwiperSlide>
                );
              })
            : ''}
        </Swiper>

        <button type="button" className={styles.film__buttonNext}></button>
        <button type="button" className={styles.film___buttonPrev}></button>
      </div>
    </div>
  );
};

export default SimilarMovies;
