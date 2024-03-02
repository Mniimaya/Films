export type T_ROOT_FILM = {
  id: number;
  externalId: T_EXTERNAL_ID;
  name: string;
  alternativeName: string;
  enName: string;
  names: T_NAME[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  slogan: string;
  status: string;
  rating: T_RATING;
  votes: T_VOTES;
  movieLength: number;
  ratingMpaa: string;
  ageRating: number;
  logo: T_LOGO;
  poster: T_POSTER;
  backdrop: T_BACKDROP;
  videos: T_VIDEOS;
  genres: T_GENRE[];
  countries: T_COUNTRY[];
  persons: T_PERSON[];
  reviewInfo: T_REVIEW_INFO;
  seasonsInfo: T_SEASONS_INFO[];
  budget: T_BUDGET;
  fees: T_FEES;
  premiere: T_PREMIERE;
  similarMovies: T_SIMILAR_MOVY[];
  sequelsAndPrequels: T_SEQUELS_AND_PREQUEL[];
  watchability: T_WATCHABILITY;
  releaseYears: T_RELEASE_YEAR[];
  top10: number;
  top250: number;
  ticketsOnSale: boolean;
  totalSeriesLength: number;
  seriesLength: number;
  isSeries: boolean;
  audience: T_AUDIENCE[];
  lists: string[];
  networks: T_NETWORK[];
  updatedAt: string;
  createdAt: string;
  facts: T_FACT[];
  imagesInfo: T__IMAGES_INFO;
};

export type T_FILTERMOVIE = {
  docs: T_ROOT_FILM[];
  total: number;
  limit?: number;
  page?: number;
  pages?: number;
};

export type T_EXTERNAL_ID = {
  kpHD: string;
  imdb: string;
  tmdb: number;
};

export type T_NAME = {
  name: string;
  language: string;
  type: string;
};

export type T_RATING = {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
};

export type T_VOTES = {
  kp: string;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
};

export type T_LOGO = {
  url: string;
};

export type T_POSTER = {
  url: string;
  previewUrl: string;
};

export type T_BACKDROP = {
  url: string;
  previewUrl: string;
};

export type T_VIDEOS = {
  trailers: T_TRAILER[];
  teasers: T_TEASER[];
};

export type T_TRAILER = {
  url: string;
  name: string;
  site: string;
  type: string;
  size: number;
};

export type T_TEASER = {
  url: string;
  name: string;
  site: string;
  type: string;
  size: number;
};

export type T_GENRE = {
  name: string;
};

export type T_COUNTRY = {
  name: string;
};

export type T_REVIEW_INFO = {
  count: number;
  positiveCount: number;
  percentage: string;
};

export type T_SEASONS_INFO = {
  number: number;
  episodesCount: number;
};

export type T_BUDGET = {
  value: number;
  currency: string;
};

export type T_FEES = {
  world: T_WORLD;
  russia: T_RUSSIA;
  usa: T_USA;
};

export type T_WORLD = {
  value: number;
  currency: string;
};

export type T_RUSSIA = {
  value: number;
  currency: string;
};

export type T_USA = {
  value: number;
  currency: string;
};

export type T_PREMIERE = {
  country: string;
  world: string;
  russia: string;
  digital: string;
  cinema: string;
  bluray: string;
  dvd: string;
};

export type T_SIMILAR_MOVY = {
  id: number;
  rating: T_RATING2;
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: T_POSTER2;
};

export type T_RATING2 = {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
};

export type T_POSTER2 = {
  url: string;
  previewUrl: string;
};

export type T_SEQUELS_AND_PREQUEL = {
  id: number;
  rating: T_RATING3;
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: T_POSTER3;
};

export type T_RATING3 = {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
};

export type T_POSTER3 = {
  url: string;
  previewUrl: string;
};

export type T_WATCHABILITY = {
  items: T_ITEM[];
};

export type T_ITEM = {
  name: string;
  logo: T_LOGO2;
  url: string;
};

export type T_LOGO2 = {
  url: string;
};

export type T_RELEASE_YEAR = {
  start: number;
  end: number;
};

export type T_AUDIENCE = {
  count: number;
  country: string;
};

export type T_NETWORK = {
  items: T__ITEM2[];
};

export type T__ITEM2 = {
  name: string;
  logo: T_LOGO3;
};

export type T_LOGO3 = {
  url: string;
};

export type T__IMAGES_INFO = {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
};

export enum ENUM_PAGE {
  'animated-series' = 'series',
  'tv-series' = 'series',
  'movie' = 'film',
}

export enum ENUM_BUTTON_TYPES {
  'button',
  'submit',
  'reset',
  undefined,
}

export type T_OPTION_CUSOM_SELECT = {
  value: string;
  label: string;
};

export type T_PERSON_SEARCH = {
  docs: T_PERSON[];
  limit: number;
  page: number;
  pages: number;
  total: number;
};

export type T_PERSON = {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession?: T_PROFESSION[];
  enProfession: string;
  facts?: T_FACT[];
  movies?: T_MOVIE[];
  birthPlace?: T_BIRTHPLACE[];
  age?: number;
  birthday?: string;
};

export type T_PROFESSION = {
  value: string;
};

export type T_BIRTHPLACE = {
  value: string;
};

export type T_FACT = {
  value: string;
};

export type T_MOVIE = {
  id: number;
  name: string;
  alternativeName?: string;
  rating?: number;
  general: boolean;
  description?: string;
  enProfession: string;
};

export type T_PARAMS_FILTER = {
  genres: string;
  countries: string;
  year: string;
  rating: string;
};
