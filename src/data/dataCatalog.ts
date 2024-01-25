interface I_ITEM_DATA_CATALOG {
  title: string;
}

export interface I_DATA_CATALOG {
  [films: string]: I_ITEM_DATA_CATALOG;
  series: I_ITEM_DATA_CATALOG;
  mult: I_ITEM_DATA_CATALOG;
}

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
