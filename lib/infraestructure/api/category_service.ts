import {HttpInstance} from '../../core/adapters';
import {urlStoreGraphQL} from '../../core/constants/constant';
import {
  CategoryGateway,
  ICategory,
  IResponseCategory,
} from '../../domain/interfaces';
import {gql} from 'graphql-request';

export class CategoryService implements CategoryGateway {
  constructor(private readonly _http: HttpInstance) {}

  async getCategories(): Promise<ICategory[]> {
    const query = gql`
      {
        categories {
          id
          name
          image
        }
      }
    `;

    const {data, status} = await this._http.get<IResponseCategory>(
      urlStoreGraphQL,
      {
        query,
      },
    );

    if (status === 200 && data) {
      return data.categories;
    }
    return [];
  }
}
