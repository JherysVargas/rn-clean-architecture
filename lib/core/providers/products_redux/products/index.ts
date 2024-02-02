import {createSlice} from '@reduxjs/toolkit';
import {initialStateProductReducer} from './initial_state';

const productsSlice = createSlice({
  name: 'products',
  initialState: initialStateProductReducer,
  reducers: {
    setSelectedProduct(state, action) {
      state.detailProduct = action.payload;
    },
    setSelectedFilter(state, action) {
      state.selectedFilter = action.payload;
    },
  },
});

export const {setSelectedProduct, setSelectedFilter} = productsSlice.actions;

export default productsSlice.reducer;
