import {IProduct} from '../interfaces/product/product';

export type InitialStateProductReducer = {
  detailProduct: IProduct | undefined;
  favorites: number[];
};
