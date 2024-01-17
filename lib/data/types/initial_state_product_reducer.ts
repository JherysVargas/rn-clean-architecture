import {FilterType} from '../enums/filters_enum';
import {IProduct} from '../interfaces/product_interface';

declare interface InitialStateProductReducer {
  allProductList: IProduct[];
  filterProductList: IProduct[];
  detailProduct: IProduct | undefined;
  selectedFilter: FilterType;
}

export default InitialStateProductReducer;
