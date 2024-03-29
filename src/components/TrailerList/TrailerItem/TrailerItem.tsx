import { useAppDispatch, useAppSelector } from '../../../hooks/hookRedux';
import { handlerShowTrailer, updateUrlTrailer } from '../../../store/slises/trailerSlice';
import styles from './TrailerItem.module.scss';

type T_PROPS = {
  url: string;
  name: string;
};

const TrailerItem = ({ url, name }: T_PROPS) => {
  const isShowTrailer = useAppSelector((state) => state.trailer.isOpenTrailer);
  const dispatch = useAppDispatch();

  const getUrlImage = (url: string) => {
    const idImage = url.split('/').pop();
    const srcImage = `//img.youtube.com/vi/${idImage}/0.jpg`;
    return srcImage;
  };

  const handlerShow = () => {
    dispatch(handlerShowTrailer(!isShowTrailer));
    dispatch(updateUrlTrailer(url));
  };
  return (
    <li className={styles.item}>
      <div className={styles.imgWrapper} onClick={() => handlerShow()}>
        <img className={styles.img} src={getUrlImage(url)} />
      </div>
      <p className={styles.name} onClick={() => handlerShow()}>
        {name}
      </p>
    </li>
  );
};

export default TrailerItem;
