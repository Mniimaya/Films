import React from 'react';
import Intro from '../../components/Intro/Intro';
import CategorySlider from '../../components/CategorySlider/CategorySlider';
import { getFilmsCollection } from '../../API/FilmApi';
import { T_FILTERMOVIE } from '../../TYPES/TYPES';
import { dataCollection } from '../../data/dataCollection';
import { useAppDispatch } from '../../hooks/hookRedux';
import { updateIsLoading } from '../../store/slises/loadingSlice';

const HomePage = () => {
  const [top10, setTop10] = React.useState<T_FILTERMOVIE>();
  const [tvSeries100, setTvSeries100] = React.useState<T_FILTERMOVIE>();
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(updateIsLoading(true));
    Promise.all([
      getFilmsCollection(dataCollection.top10.param).then((response) => {
        setTop10(response?.data);
        return response;
      }),
      getFilmsCollection(dataCollection.top100series.param).then((response) => {
        setTvSeries100(response?.data);
        return response;
      }),
    ]).then(() => {
      dispatch(updateIsLoading(false));
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
