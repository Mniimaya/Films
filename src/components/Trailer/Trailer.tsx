import { useAppDispatch, useAppSelector } from '../../hooks/hookRedux';
import styles from './Trailer.module.scss';
import ReactPlayer from 'react-player/youtube';
import { handlerShowTrailer } from '../../store/slises/trailerSlice';

const Trailer = () => {
  const url = useAppSelector((state) => state.trailer.url);
  const dispatch = useAppDispatch();

  const handleClickOutside = (evt: React.MouseEvent<HTMLElement>) => {
    if (evt.target === evt.currentTarget) {
      dispatch(handlerShowTrailer(false));
    }
  };

  return (
    <div className={`${styles.overlay} ${styles.active}`} onClick={(evt) => handleClickOutside(evt)}>
      <ReactPlayer url={url} />
    </div>
  );
};

export default Trailer;
