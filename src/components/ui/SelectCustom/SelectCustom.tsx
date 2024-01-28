import Select from 'react-select';
import { T_OPTION_CUSOM_SELECT } from '../../../TYPES/TYPES';

type T_PROPS = {
  options: T_OPTION_CUSOM_SELECT[];
  title?: string;
};

const SelectCustom = ({ options, title }: T_PROPS) => {
  return <Select options={options} classNamePrefix="SelectCustom" placeholder={title} isSearchable={false} />;
};

export default SelectCustom;
