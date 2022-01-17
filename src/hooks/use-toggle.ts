import { toggleStore, useAppDispatch, useAppSelector } from '.';
import { onToggleTheme } from '../features/toggle/toggleSlice';

export const UseToggle = () => {
  const dispatch = useAppDispatch();
  const resultToggle = useAppSelector(toggleStore);
  const { isDark } = resultToggle;

  const handleToggleTheme = (isDark: boolean) =>
    dispatch(onToggleTheme(isDark));

  return {
    handleToggleTheme,
    isDark,
  };
};
