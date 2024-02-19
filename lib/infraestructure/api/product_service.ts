import {IProduct} from '../../domain/interfaces/product/product';
import {urlStoreApiRest} from '../../core/constants/constant';
import {ProductGateway} from '../../domain/interfaces';
import {HttpInstance} from '../../core/adapters';

export class ProductService implements ProductGateway {
  constructor(private readonly _http: HttpInstance) {}

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
}
