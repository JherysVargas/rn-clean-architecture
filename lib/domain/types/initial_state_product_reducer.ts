import {FilterType} from '../enums/filters_enum';
import {IProduct} from '../interfaces/product/product';

export type InitialStateProductReducer = {
  detailProduct: IProduct | undefined;
  selectedFilter: FilterType;
};
