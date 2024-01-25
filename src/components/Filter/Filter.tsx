import styles from './Filter.module.scss';
import SelectCustom from '../ui/SelectCustom/SelectCustom';
import { useAppDispatch, useAppSelector } from '../../hooks/hookRedux';
import { toggleShowFilter } from '../../store/slises/filterSlice';
import { optionsGenre } from '../../data/dataGenre';
import { optionsCountry } from '../../data/dataCountry';
import { optionsYears } from '../../data/dataYears';
import { optionsRating } from '../../data/dataRating';
import Button from '../ui/Button/Button';
import { IoFilter } from 'react-icons/io5';

const Filter = () => {
  const isOpenFilter = useAppSelector((state) => state.filter.isOpen);
  const dispatch = useAppDispatch();
  const toggleFilter = () => {
    dispatch(toggleShowFilter(!isOpenFilter));
  };

  return (
    <>
      <button className={styles.openFilter} type="button" onClick={() => toggleFilter()}>
        <IoFilter />
        Фильтры
      </button>
      <div className={`${styles.container} ${isOpenFilter && 'active'}`}>
        <div className={styles.filterTop}>
          <h2 className={styles.title}>Фильтры</h2>
          <button className={styles.buttonClose} type="button" onClick={() => toggleFilter()}></button>
        </div>

        <div className={styles.filterContainer}>
          <SelectCustom title="Жанр" options={optionsGenre} />
          <SelectCustom title="Страны" options={optionsCountry} />
          <SelectCustom title="Годы" options={optionsYears} />
          <SelectCustom title="Рейтинг" options={optionsRating} />
        </div>
        <button type="button" className={styles.resetButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M11.8492 1.94975L1.94975 11.8492M11.8492 11.8492L1.94975 1.94975" stroke="#CDCCD4F5" stroke-width="2" stroke-linecap="round" />
          </svg>
          Сбросить фильтры
        </button>
        <Button classAdd={styles.submit}>Применить</Button>
      </div>
    </>
  );
};

export default Filter;
