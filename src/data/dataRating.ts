import { optionCusomSelect } from "../TYPES/TYPES";

export const dataRating = {
  "9": "9",
  "8-10": "Больше 8",
  "7-10": "Больше 7",
  "6-10": "Больше 6",
};

export const optionsRating: optionCusomSelect[] = Object.entries(dataRating).map(([value, label]) => {
  return { value: value, label: label };
});
