import React from 'react';
import PosterFilm from '../../components/PosterFilm/PosterFilm';
import { getFilmById } from '../../API/FilmApi';
import { useParams } from 'react-router-dom';
import { IRootFilm } from '../../TYPES/TYPES';

type TYPE_PARAMS = {
  filmId: string;
};

const FilmPage = () => {
  const params = useParams<TYPE_PARAMS>();
  const [film, setFilm] = React.useState<IRootFilm>();

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
      {film ? <PosterFilm {...film} /> : ''}
      <div className="container"></div>
    </>
  );
};

export default FilmPage;
