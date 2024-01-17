import {createSlice} from '@reduxjs/toolkit';
import {initialStateProductReducer} from './initial_state';
import {FilterType} from '../../../../data/enums/filters_enum';
import {IProduct} from '../../../../data/interfaces/product_interface';

const productsSlice = createSlice({
  name: 'products',
  initialState: initialStateProductReducer,
  reducers: {
    setProductsList(state, action) {
      state.allProductList = action.payload;
      state.filterProductList = action.payload;
    },
    setSelectedProduct(state, action) {
      state.detailProduct = action.payload;
    },
    setSelectedFilter(state, action) {
      state.selectedFilter = action.payload;
      switch (action.payload) {
        case FilterType.NEGATIVE: {
          state.filterProductList = state.allProductList.filter(
            (product: IProduct) => product.is_redemption,
          );
          break;
        }
        case FilterType.POSITIVE: {
          state.filterProductList = state.allProductList.filter(
            (product: IProduct) => !product.is_redemption,
          );
          break;
        }
        default: {
          state.filterProductList = state.allProductList;
          break;
        }
      }
    },
  },
});

export const {setProductsList, setSelectedProduct, setSelectedFilter} =
  productsSlice.actions;
export default productsSlice.reducer;
