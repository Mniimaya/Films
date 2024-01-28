import { T_OPTION_CUSOM_SELECT } from '../TYPES/TYPES';

export const dataGenre = {
  comedy: 'Комедии',
  animation: 'Мультфильмы',
  horror: 'Ужасы',
  sci: 'Фантастика',
  thriller: 'Триллеры',
  action: 'Боевики',
  romance: 'Мелодрамы',
  mystery: 'Детективы',
  adventure: 'Приключения',
  fantasy: 'Фэнтези',
  war: 'Военные',
  family: 'Семейные',
  history: 'Исторические',
  children: 'Детские',
};

export const optionsGenre: T_OPTION_CUSOM_SELECT[] = Object.entries(dataGenre).map(([value, label]) => {
  return { value: value, label: label };
});
