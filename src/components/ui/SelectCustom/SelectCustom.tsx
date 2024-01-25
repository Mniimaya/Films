import Select from 'react-select';
import { optionCusomSelect } from '../../../TYPES/TYPES';

interface props {
  options: optionCusomSelect[];
  title?: string;
}

const SelectCustom = ({ options, title }: props) => {
  return <Select options={options} classNamePrefix="SelectCustom" placeholder={title} isSearchable={false} />;
};

export default SelectCustom;
