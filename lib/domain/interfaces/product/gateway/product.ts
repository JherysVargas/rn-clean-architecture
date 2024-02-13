import {IProduct} from '../product';

export interface ProductGateway {
  getProducts(): Promise<IProduct[]>;
}
