import {initialStateProductReducer} from './initial_state';
import {FilterType} from '../../../domain/enums/filters_enum';
import {IProduct} from '../../../domain/interfaces';
import {create} from 'zustand';
import {InitialStateProductReducer} from '../../../domain/types';

type ProductState = InitialStateProductReducer & {
  setSelectedProduct: (product: IProduct) => void;
  setSelectedFilter: (filter: FilterType) => void;
};

export const useProductsStore = create<ProductState>()(set => ({
  ...initialStateProductReducer,
  setSelectedProduct: product =>
    set(state => ({...state, detailProduct: product})),
  setSelectedFilter: filter => {
    set(state => ({...state, selectedFilter: filter}));
  },
}));
