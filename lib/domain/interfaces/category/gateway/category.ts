import {ICategory} from '../category';

export interface CategoryGateway {
  getCategories(): Promise<ICategory[]>;
}
