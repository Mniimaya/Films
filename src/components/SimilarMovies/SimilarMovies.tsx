import { Link } from 'react-router-dom';
import styles from './SimilarMovies.module.scss';
import { ISimilarMovy } from '../../TYPES/TYPES';
import { Swiper, SwiperSlide } from 'swiper/react';
import imgTemplate from '../../assets/img/film-template.png';

interface props {
  data: ISimilarMovy[];
}

const SimilarMovies = ({ data }: props) => {
  return (
    <div className={`${styles.wrapper} container`}>
      <h2 className={styles.title}>Похожие картины</h2>
      <Swiper spaceBetween={30} slidesPerView="auto">
        {data.length > 0
          ? data.map((item, i) => {
              return (
                <SwiperSlide key={i} className={styles.item}>
                  <Link to={`film/${item.id}`} className={styles.imgLink}>
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
    </div>
  );
};

export default SimilarMovies;
