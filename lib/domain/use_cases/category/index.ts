import {ICategory, CategoryGateway} from '../../interfaces';

export class CategoryUseCase {
  constructor(private readonly _categoryGateway: CategoryGateway) {}

  async getCategories(): Promise<ICategory[]> {
    return this._categoryGateway.getCategories();
  }
}
