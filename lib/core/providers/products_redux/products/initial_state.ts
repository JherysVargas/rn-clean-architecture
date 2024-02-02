import {FilterType} from '../../../../domain/enums/filters_enum';
import {InitialStateProductReducer} from '../../../../domain/types/initial_state_product_reducer';

export const initialStateProductReducer: InitialStateProductReducer = {
  detailProduct: undefined,
  selectedFilter: FilterType.ALL,
};
