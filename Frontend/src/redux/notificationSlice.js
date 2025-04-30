import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  message: '',
  subText: '',
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (state, action) => {
      const { message, subText } = action.payload;
      state.show = true;
      state.message = message;
      state.subText = subText;
    },
    hideNotification: (state) => {
      state.show = false;
      state.message = '';
      state.subText = '';
    },
  },
});

export const { showNotification, hideNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
