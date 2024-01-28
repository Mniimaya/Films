import axios from 'axios';

axios.defaults.headers.common['X-API-KEY'] = '9D0FG1N-TFDMD98-H6PWA8T-0F2CZ09';

export const getFilms = async (lists: string, limit: number = 10, offset: number = 0, page: number = 1) => {
  try {
    const response = await axios({
      url: 'https://api.kinopoisk.dev/v1.4/movie',
      method: 'GET',
      params: { page, limit, offset, lists },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFilmById = async (id: number) => {
  try {
    const response = await axios({
      url: `https://api.kinopoisk.dev/v1.4/movie/${id}`,
      method: 'GET',
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const searchData = async (query: string) => {
  try {
    const response = await axios({
      url: `https://api.kinopoisk.dev/v1.4/movie/search`,
      params: { page: 1, limit: 10, query },
      method: 'GET',
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
