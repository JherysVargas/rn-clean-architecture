import {createSlice} from '@reduxjs/toolkit';
import {initialStateCategoriesReducer} from './initialState';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialStateCategoriesReducer,
  reducers: {
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const {setSelectedCategory} = categoriesSlice.actions;

export default categoriesSlice.reducer;
