import {IProduct} from '../../domain/interfaces/product/product';
import {urlStoreApiRest} from '../../core/constants/constant';
import {ProductGateway} from '../../domain/interfaces';
import {HttpInstance, LocalStorageInstance} from '../../core/adapters';
import {KeysStorage} from '../../domain/enums/storage';

export class ProductService implements ProductGateway {
  constructor(
    private readonly _http: HttpInstance,
    private readonly _storage: LocalStorageInstance,
  ) {}

  async getProducts(): Promise<IProduct[]> {
    const {data, status} = await this._http.get(`${urlStoreApiRest}/products`);

    if (status === 200 && data) {
      return data;
    }
    return [];
  }

  async getProductsByCategory(id: string): Promise<IProduct[]> {
    const {data, status} = await this._http.get(
      `${urlStoreApiRest}/products/?categoryId=${id}`,
    );

    if (status === 200 && data) {
      return data;
    }
    return [];
  }

  async addFavorite(id: number): Promise<boolean> {
    const currentFavorites = await this.getFavorites();

    const response = await this._storage.set(KeysStorage.FAVORITE, [
      ...currentFavorites,
      id,
    ]);

    return response;
  }

  async getFavorites(): Promise<number[]> {
    const response = await this._storage.get<number[]>(KeysStorage.FAVORITE);

    return response || [];
  }

  async removeFavorite(id: number): Promise<boolean> {
    const favorites = await this.getFavorites();

    const newFavorites = favorites.filter(item => item !== Number(id));

    const response = await this._storage.update(
      KeysStorage.FAVORITE,
      newFavorites,
    );

    return response;
  }
}
