import {IProduct, ProductGateway} from '../../interfaces';

export class ProductUseCase {
  constructor(private readonly _productGateway: ProductGateway) {}

  async getProducts(): Promise<IProduct[]> {
    return this._productGateway.getProducts();
  }

  async getProductsByCategory(categoryID: string): Promise<IProduct[]> {
    return this._productGateway.getProductsByCategory(categoryID);
  }

  async addFavorite(id: number): Promise<boolean> {
    return this._productGateway.addFavorite(id);
  }

  async getFavorites(): Promise<number[]> {
    return this._productGateway.getFavorites();
  }

  async removeFavorite(id: number): Promise<boolean> {
    return this._productGateway.removeFavorite(id);
  }
}
