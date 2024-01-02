import React from 'react';
import Intro from '../../components/Intro/Intro';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import { getFilms } from '../../API/FilmApi';
import { IFilterMovie } from '../../TYPES/TYPES';

const HomePage = () => {
  const [top10, setTop10] = React.useState<IFilterMovie>();
  const [TvSeries100, setTvSeries100] = React.useState<IFilterMovie>();

  React.useEffect(() => {
    getFilms('top10-hd').then((data) => {
      setTop10(data);
    });
    getFilms('100_greatest_TVseries').then((data) => {
      setTvSeries100(data);
    });
  }, []);

  return (
    <>
      <Intro />
      {top10 ? <CategorySlider data={top10} title="Топ 10 в онлайн-кинотеатре" /> : ''}
      {TvSeries100 ? <CategorySlider data={TvSeries100} title="100 великих сериалов" /> : ''}
      {top10 ? <CategorySlider data={top10} title="Топ 10 в онлайн-кинотеатре" /> : ''}
      {TvSeries100 ? <CategorySlider data={TvSeries100} title="100 великих сериалов" /> : ''}
      {top10 ? <CategorySlider data={top10} title="Топ 10 в онлайн-кинотеатре" /> : ''}
      {TvSeries100 ? <CategorySlider data={TvSeries100} title="100 великих сериалов" /> : ''}
    </>
  );
};

export default HomePage;
