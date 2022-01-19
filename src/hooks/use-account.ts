import { login, register } from '../features/account';
import { useAppDispatch, useAppSelector } from './use-react-redux';
import { accountStore } from './use-selector';

export const UseAccount = () => {
  const dispatch = useAppDispatch();
  const resultAccount = useAppSelector(accountStore);

  const handleLogin = (data: any) => dispatch(login(data));
  const handleRegister = (data: any) => dispatch(register(data));

  return {
    resultAccount,
    handleLogin,
    handleRegister,
  };
};
