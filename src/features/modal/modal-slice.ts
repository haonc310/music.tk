import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalTypeEnum } from '../../constants';

export const initialStateModal: any = {
  type: ModalTypeEnum,
  open: false,
  title: '',
  others: {},
  link_mv: '',
};

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialStateModal,
  reducers: {
    openModal: (state: any, action: PayloadAction<any>) => {
      const { type, title, others, _id, link_mv } = action.payload;
      state.open = true;
      state.type = type;
      state.title = title;
      state.others = others;
      state._id = _id;
      state.link_mv = link_mv;
    },
    closeModal: (state: any, action: PayloadAction<any>) => {
      state.open = false;
      state.type = '';
      state.title = '';
      state.others=''
      state._id=''
    },
  },
});

const { actions, reducer } = modalSlice;
export const { openModal, closeModal } = actions;
export default reducer;
