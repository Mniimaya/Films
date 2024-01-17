export interface IRootFilm {
  id: number;
  externalId: IExternalId;
  name: string;
  alternativeName: string;
  enName: string;
  names: IName[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  slogan: string;
  status: string;
  rating: IRating;
  votes: IVotes;
  movieLength: number;
  ratingMpaa: string;
  ageRating: number;
  logo: ILogo;
  poster: IPoster;
  backdrop: IBackdrop;
  videos: IVideos;
  genres: IGenre[];
  countries: ICountry[];
  persons: IPerson[];
  reviewInfo: IReviewInfo;
  seasonsInfo: ISeasonsInfo[];
  budget: IBudget;
  fees: IFees;
  premiere: IPremiere;
  similarMovies: ISimilarMovy[];
  sequelsAndPrequels: ISequelsAndPrequel[];
  watchability: IWatchability;
  releaseYears: IReleaseYear[];
  top10: number;
  top250: number;
  ticketsOnSale: boolean;
  totalSeriesLength: number;
  seriesLength: number;
  isSeries: boolean;
  audience: IAudience[];
  lists: string[];
  networks: INetwork[];
  updatedAt: string;
  createdAt: string;
  facts: IFact[];
  imagesInfo: I_ImagesInfo;
}

export interface IFilterMovie {
  docs?: IRootFilm[];
  total?: number;
  limit?: number;
  page?: number;
  pages?: number;
}

export interface IExternalId {
  kpHD: string;
  imdb: string;
  tmdb: number;
}

export interface IName {
  name: string;
  language: string;
  type: string;
}

export interface IRating {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface IVotes {
  kp: string;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface ILogo {
  url: string;
}

export interface IPoster {
  url: string;
  previewUrl: string;
}

export interface IBackdrop {
  url: string;
  previewUrl: string;
}

export interface IVideos {
  trailers: ITrailer[];
  teasers: ITeaser[];
}

export interface ITrailer {
  url: string;
  name: string;
  site: string;
  type: string;
  size: number;
}

export interface ITeaser {
  url: string;
  name: string;
  site: string;
  type: string;
  size: number;
}

export interface IGenre {
  name: string;
}

export interface ICountry {
  name: string;
}

export interface IPerson {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
}

export interface IReviewInfo {
  count: number;
  positiveCount: number;
  percentage: string;
}

export interface ISeasonsInfo {
  number: number;
  episodesCount: number;
}

export interface IBudget {
  value: number;
  currency: string;
}

export interface IFees {
  world: IWorld;
  russia: IRussia;
  usa: IUsa;
}

export interface IWorld {
  value: number;
  currency: string;
}

export interface IRussia {
  value: number;
  currency: string;
}

export interface IUsa {
  value: number;
  currency: string;
}

export interface IPremiere {
  country: string;
  world: string;
  russia: string;
  digital: string;
  cinema: string;
  bluray: string;
  dvd: string;
}

export interface ISimilarMovy {
  id: number;
  rating: IRating2;
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: IPoster2;
}

export interface IRating2 {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface IPoster2 {
  url: string;
  previewUrl: string;
}

export interface ISequelsAndPrequel {
  id: number;
  rating: IRating3;
  year: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: IPoster3;
}

export interface IRating3 {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface IPoster3 {
  url: string;
  previewUrl: string;
}

export interface IWatchability {
  items: IItem[];
}

export interface IItem {
  name: string;
  logo: ILogo2;
  url: string;
}

export interface ILogo2 {
  url: string;
}

export interface IReleaseYear {
  start: number;
  end: number;
}

export interface IAudience {
  count: number;
  country: string;
}

export interface INetwork {
  items: I_Item2[];
}

export interface I_Item2 {
  name: string;
  logo: ILogo3;
}

export interface ILogo3 {
  url: string;
}

export interface IFact {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface I_ImagesInfo {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}

export enum ENUM_PAGE {
  'animated-series' = 'series',
  'tv-series' = 'series',
  'movie' = 'film',
}

export enum ButtonTypes {
  'button',
  'submit',
  'reset',
  undefined,
}
