import {createSlice} from '@reduxjs/toolkit';
import {initialStateProductReducer} from './initialState';

const productsSlice = createSlice({
  name: 'products',
  initialState: initialStateProductReducer,
  reducers: {
    setSelectedProduct(state, action) {
      state.detailProduct = action.payload;
    },
  },
});

export const {setSelectedProduct} = productsSlice.actions;

export default productsSlice.reducer;
