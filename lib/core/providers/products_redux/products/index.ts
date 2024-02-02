import {createSlice} from '@reduxjs/toolkit';
import {initialStateProductReducer} from './initial_state';

const productsSlice = createSlice({
  name: 'products',
  initialState: initialStateProductReducer,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSelectedProduct(state, action) {
      state.detailProduct = action.payload;
    },
    setSelectedFilter(state, action) {
      state.selectedFilter = action.payload;
    },
  },
});

export const {setProducts, setSelectedProduct, setSelectedFilter} =
  productsSlice.actions;

export default productsSlice.reducer;
