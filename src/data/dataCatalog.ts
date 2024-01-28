type T_ITEM_DATA_CATALOG = {
  title: string;
};

export type T_DATA_CATALOG = {
  [films: string]: T_ITEM_DATA_CATALOG;
  series: T_ITEM_DATA_CATALOG;
  mult: T_ITEM_DATA_CATALOG;
};

export const dataCatalog = {
  films: {
    title: 'Фильмы',
  },
  series: {
    title: 'Сериалы',
  },
  mult: {
    title: 'Мультфильмы',
  },
};
