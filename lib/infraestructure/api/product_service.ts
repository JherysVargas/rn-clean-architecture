import {IProduct} from '../../domain/interfaces/product/product';
import {url} from '../../core/constants/constant';
import {ProductGateway} from '../../domain/interfaces';
import {HttpInstance} from '../../core/adapters';

export class ProductService implements ProductGateway {
  constructor(private readonly _http: HttpInstance) {}

  async getProducts(): Promise<IProduct[]> {
    const {data, status} = await this._http.get(url);

    if (status === 200 && data) {
      return data;
    }
    return [];
  }
}
