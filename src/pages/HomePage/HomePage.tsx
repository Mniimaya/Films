import React from 'react';
import Intro from '../../components/Intro/Intro';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import { getFilms } from '../../API/FilmApi';
import { IFilterMovie } from '../../TYPES/TYPES';
import { dataCollection } from '../../data/dataCollection';

const HomePage = () => {
  const [top10, setTop10] = React.useState<IFilterMovie>();
  const [tvSeries100, setTvSeries100] = React.useState<IFilterMovie>();

  React.useEffect(() => {
    getFilms(dataCollection.top10.param).then((data) => {
      setTop10(data);
    });
    getFilms(dataCollection.top100series.param).then((data) => {
      setTvSeries100(data);
    });
  }, []);

  return (
    <>
      <Intro />
      {top10 && <CategorySlider collectionName="top10" data={top10} title={dataCollection.top10.title} />}
      {tvSeries100 && <CategorySlider collectionName="top100series" data={tvSeries100} title={dataCollection.top100series.title} />}
    </>
  );
};

export default HomePage;
