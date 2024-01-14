import React from 'react';
import Intro from '../../components/Intro/Intro';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import { getFilms } from '../../API/FilmApi';
import { IFilterMovie } from '../../TYPES/TYPES';

const COLLECTION_NAMES = {
  top10: 'top10-hd',
  top10series: '100_greatest_TVseries',
};

const HomePage = () => {
  const [top10, setTop10] = React.useState<IFilterMovie>();
  const [tvSeries100, setTvSeries100] = React.useState<IFilterMovie>();

  React.useEffect(() => {
    getFilms(COLLECTION_NAMES.top10).then((data) => {
      setTop10(data);
    });
    getFilms(COLLECTION_NAMES.top10series).then((data) => {
      setTvSeries100(data);
    });
  }, []);

  return (
    <>
      <Intro />
      {top10 && <CategorySlider data={top10} title="Топ 10 в онлайн-кинотеатре" />}
      {tvSeries100 && <CategorySlider data={tvSeries100} title="100 великих сериалов" />}
    </>
  );
};

export default HomePage;
