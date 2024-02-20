import {IProduct} from '../product';

export interface ProductGateway {
  getProducts(): Promise<IProduct[]>;
  getProductsByCategory(id: string): Promise<IProduct[]>;
  addFavorite(id: number): Promise<boolean>;
  getFavorites(): Promise<number[]>;
  removeFavorite(id: number): Promise<boolean>;
}
