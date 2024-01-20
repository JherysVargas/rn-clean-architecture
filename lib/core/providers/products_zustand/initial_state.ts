import {FilterType} from '../../../domain/enums/filters_enum';
import {InitialStateProductReducer} from '../../../domain/types';

export const initialStateProductReducer: InitialStateProductReducer = {
  allProductList: [],
  filterProductList: [],
  detailProduct: undefined,
  selectedFilter: FilterType.ALL,
};
