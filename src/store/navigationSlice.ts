import { createSlice } from '@reduxjs/toolkit';

interface NavigationState {
  currentPage: string;
}

const initialState: NavigationState = {
  currentPage: '/dashboard/socialmedia', // صفحه پیش‌فرض 
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = navigationSlice.actions;
export default navigationSlice.reducer;
