import axios from 'axios';

axios.defaults.headers.common['X-API-KEY'] = 'G9E6V8E-0ZNM8MT-G0X1N07-87NNTF7';

export const getFilms = async (lists: string, limit: number = 10, offset: number = 0, page: number = 1) => {
  try {
    const response = await axios({
      url: 'https://api.kinopoisk.dev/v1.4/movie',
      method: 'GET',
      params: { page, limit, offset, lists },
    });
    return response;
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

export const getActor = async (id: string) => {
  const selectFieldsArray: string[] = ['id', 'photo', 'name', 'birthday', 'age', 'profession', 'facts', 'movies', 'birthPlace'];
  try {
    const response = await axios({
      url: 'https://api.kinopoisk.dev/v1.4/person',
      method: 'GET',
      params: { id, selectFields: selectFieldsArray },
      paramsSerializer: {
        indexes: null,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
