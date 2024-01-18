import {IProduct, ProductGateway} from '../../interfaces';

export class ProductUseCase {
  constructor(private readonly _productGateway: ProductGateway) {}

  async getProducts(): Promise<IProduct[]> {
    return this._productGateway.getProducts();
  }
}
