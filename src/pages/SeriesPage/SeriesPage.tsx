import React from 'react';
import { useParams } from 'react-router-dom';
import PosterSeries from '../../components/PosterSeries/PosterSeries';
import { getFilmById } from '../../API/FilmApi';
import { IRootFilm } from '../../TYPES/TYPES';
import Actors from '../../components/Actors/Actors';

type TYPE_PARAMS = {
  seriesId: string;
};

const SeriesPage = () => {
  const params = useParams<TYPE_PARAMS>();
  const [series, setSeries] = React.useState<IRootFilm>();

  const requestsFilm = async () => {
    const idFilm: number = params.seriesId ? +params.seriesId : 0;
    getFilmById(idFilm).then((data) => {
      setSeries(data);
    });
  };

  React.useEffect(() => {
    requestsFilm();
  }, [params.seriesId]);

  console.log(series?.persons);

  return (
    <>
      {series ? <PosterSeries {...series} /> : ''}
      <div className="container">{series?.persons ? <Actors persons={series?.persons} /> : ''}</div>
    </>
  );
};

export default SeriesPage;
