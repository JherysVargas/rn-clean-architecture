import {IProduct} from '../product';

export abstract class ProductGateway {
  abstract getProducts(): Promise<IProduct[]>;
}
