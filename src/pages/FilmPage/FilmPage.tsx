import React from 'react';
import styles from './FilmPage.module.scss';
import PosterFilm from '../../components/PosterFilm/PosterFilm';
import { getFilmById } from '../../API/FilmApi';
import { useParams } from 'react-router-dom';
import { T_ROOT_FILM } from '../../TYPES/TYPES';
import ActorsSlider from '../../components/ActorsSlider/ActorsSlider';
import SimilarMovies from '../../components/SimilarMovies/SimilarMovies';
import TrailerList from '../../components/TrailerList/TrailerList';
import { useAppSelector } from '../../hooks/hookRedux';
import Trailer from '../../components/Trailer/Trailer';

type TYPE_PARAMS = {
  filmId: string;
};

const FilmPage = () => {
  const params = useParams<TYPE_PARAMS>();
  const [film, setFilm] = React.useState<T_ROOT_FILM>();
  const isOpenTrailer = useAppSelector((state) => state.trailer.isOpenTrailer);

  const requestsFilm = async () => {
    const idFilm: number = params.filmId ? +params.filmId : 0;
    getFilmById(idFilm).then((data) => {
      setFilm(data);
    });
  };

  React.useEffect(() => {
    requestsFilm();
  }, [params.filmId]);

  return (
    <>
      {film && <PosterFilm {...film} />}
      <div className={styles.container}>{!!film?.videos.trailers.length && <TrailerList data={film.videos.trailers} />}</div>
      <div className={styles.container}>{film?.persons && <ActorsSlider persons={film?.persons} />}</div>
      <div className={styles.container}>{film?.similarMovies.length && <SimilarMovies data={film.similarMovies} />}</div>
      {isOpenTrailer && <Trailer />}
    </>
  );
};

export default FilmPage;
