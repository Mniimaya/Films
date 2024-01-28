import Input from '../ui/Input/Input';
import Button from '../ui/Button/Button';

const PersonalBlock = () => {
  return (
    <div>
      <h2>Личные данные</h2>
      <form>
        <label>
          <Input type="text" placeholder="Имя" />
        </label>
        <label>
          <Input type="email" placeholder="Email" />
        </label>
        <label>
          <Input type="password" placeholder="Имя" />
        </label>
      </form>
      <Button type="submit" children="Редактировать" />
    </div>
  );
};

export default PersonalBlock;
