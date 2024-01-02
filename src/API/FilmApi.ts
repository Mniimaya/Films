import axios from 'axios';

axios.defaults.headers.common['X-API-KEY'] = 'G9E6V8E-0ZNM8MT-G0X1N07-87NNTF7';

export const getFilms = async (lists: string) => {
  try {
    const response = await axios({
      url: 'https://api.kinopoisk.dev/v1.4/movie',
      method: 'GET',
      params: { page: 1, limit: 10, lists },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFilmById = async (id: number) => {
  try {
    const response = await axios({
      url: 'https://api.kinopoisk.dev/v1.4/movie',
      method: 'GET',
      params: { id: id },
    });
    return response.data.docs[0];
  } catch (error) {
    console.log(error);
  }
};
