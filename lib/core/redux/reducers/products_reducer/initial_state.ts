import {FilterType} from '../../../../data/enums/filters_enum';
import InitialStateProductReducer from '../../../../data/types/initial_state_product_reducer';

export const initialStateProductReducer: InitialStateProductReducer = {
  allProductList: [],
  filterProductList: [],
  detailProduct: undefined,
  selectedFilter: FilterType.ALL,
};
