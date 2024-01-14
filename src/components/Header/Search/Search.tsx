import React, { ChangeEvent } from 'react';
import styles from '../Header.module.scss';
import { searchData } from '../../../API/FilmApi';
import debounce from 'lodash.debounce';
import SearchList from './SearchList';
import { IFilterMovie } from '../../../TYPES/TYPES';

const Search = () => {
  const [value, setValue] = React.useState('');
  const [searchValue, setSearchValue] = React.useState<IFilterMovie>();

  const search = React.useCallback(
    debounce((value: string) => {
      searchData(value).then((data) => setSearchValue(data));
    }, 1000),
    []
  );

  const updateSearchValue = (evt: ChangeEvent) => {
    setValue((evt.target as any).value);
    search((evt.target as any).value);
  };

  return (
    <div className={styles.search}>
      <label>
        <button type="button">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.5 21.8612L17.014 17.3672L21.5 21.8612ZM19.5 11.3612C19.5 13.6155 18.6045 15.7775 17.0104 17.3716C15.4163 18.9656 13.2543 19.8612 11 19.8612C8.74566 19.8612 6.58365 18.9656 4.98959 17.3716C3.39553 15.7775 2.5 13.6155 2.5 11.3612C2.5 9.10684 3.39553 6.94483 4.98959 5.35077C6.58365 3.75671 8.74566 2.86118 11 2.86118C13.2543 2.86118 15.4163 3.75671 17.0104 5.35077C18.6045 6.94483 19.5 9.10684 19.5 11.3612V11.3612Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <input className={styles.inputSearch} value={value} onChange={(evt) => updateSearchValue(evt)} type="search" placeholder="Поиск" />
      </label>
      {searchValue && <SearchList data={searchValue} />}
    </div>
  );
};

export default Search;
