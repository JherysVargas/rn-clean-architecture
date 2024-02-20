import {createSlice} from '@reduxjs/toolkit';
import {initialStateProductReducer} from './initialState';

const productsSlice = createSlice({
  name: 'products',
  initialState: initialStateProductReducer,
  reducers: {
    setSelectedProduct(state, action) {
      state.detailProduct = action.payload;
    },
    setFavoritesProducts(state, action) {
      state.favorites = action.payload;
    },
    toogleFavorite(state, action) {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(
          item => item !== action.payload,
        );
        return;
      }

      state.favorites = [...state.favorites, action.payload];
    },
  },
});

export const {setSelectedProduct, setFavoritesProducts, toogleFavorite} =
  productsSlice.actions;

export default productsSlice.reducer;
