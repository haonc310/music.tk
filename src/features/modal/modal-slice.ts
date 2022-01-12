import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalTypeEnum } from '../../constants';

export const initialStateModal: any = {
  type: ModalTypeEnum,
  open: false,
  title: '',
  others: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialStateModal,
  reducers: {
    openModal: (state: any, action: PayloadAction<any>) => {
      const { type, title, others, _id } = action.payload;
      state.open = true;
      state.type = type;
      state.title = title;
      state.others = others;
      state._id = _id;
    },
  },
});

const { actions, reducer } = modalSlice;
export const { openModal } = actions;
export default reducer;
