import { optionCusomSelect } from "../TYPES/TYPES";

export const dataCountry = ["Россия", "СССР", "США", "Франция", "Южная Корея", "Великобритания", "Япония", "Италия", "Испания", "Германия", "Турция", "Швеция", "Дания", "Норвегия", "Гонконг", "Австралия", "Бельгия", "Нидерланды", "Греция", "Австрия"];

export const optionsCountry: optionCusomSelect[] = dataCountry.map((country) => {
  return { value: country, label: country };
});
