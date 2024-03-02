import Select, { ActionMeta, SingleValue } from 'react-select';
import { T_OPTION_CUSOM_SELECT } from '../../../TYPES/TYPES';

type T_PROPS = {
  options: T_OPTION_CUSOM_SELECT[];
  title?: string;
  name: string;
  onChange: (newValue: SingleValue<T_OPTION_CUSOM_SELECT>, actionMeta: ActionMeta<T_OPTION_CUSOM_SELECT>) => void;
};

const SelectCustom = ({ options, title, name, onChange }: T_PROPS) => {
  return <Select name={name} options={options} classNamePrefix="SelectCustom" placeholder={title} isSearchable={false} onChange={onChange} />;
};

export default SelectCustom;
