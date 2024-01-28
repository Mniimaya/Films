type TYPE_ITEM_COLLECTION = {
  param: string;
  title: string;
};

type TYPE_DATA_COLLECTION = {
  top10: TYPE_ITEM_COLLECTION;
  top100series: TYPE_ITEM_COLLECTION;
};

export const dataCollection: TYPE_DATA_COLLECTION = {
  top10: {
    param: 'top10-hd',
    title: 'Топ 10 в онлайн-кинотеатре',
  },
  top100series: {
    param: '100_greatest_TVseries',
    title: '100 великих сериалов',
  },
};
