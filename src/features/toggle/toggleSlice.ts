import { createSlice } from '@reduxjs/toolkit';

interface ToggleState {
  isDark: boolean;
}
const initialStateToggle: ToggleState = {
  isDark: false,
};
const toggleSlice = createSlice({
  name: 'toggle',
  initialState: initialStateToggle,
  reducers: {
    onToggleTheme: (state, action) => {
      state.isDark = action.payload;
      localStorage.setItem('isDark', JSON.stringify(action.payload));
    },
  },
});

const { actions, reducer } = toggleSlice;
export const { onToggleTheme } = actions;
export default reducer;
