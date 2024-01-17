import {AxiosStatic} from 'axios';
import {IProduct} from '../../data/interfaces/product_interface';
import {url} from '../constants/constant';

export default class ProductService {
  private _axios: AxiosStatic;

  constructor(axios: AxiosStatic) {
    this._axios = axios;
  }

  async getProducts(): Promise<IProduct[]> {
    const {data, status} = await this._axios.get(url);

    if (status === 200 && data) {
      return data;
    }
    return [];
  }
}
