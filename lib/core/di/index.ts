import {ProductGateway, CategoryGateway} from '../../domain/interfaces';
import {CategoryUseCase, ProductUseCase} from '../../domain/use_cases';
import {ProductService, CategoryService} from '../../infraestructure';
import {HttpAdapter, GraphQLAdapter, type HttpInstance} from '../adapters';
import {diContainer} from './di_container';

const _injector = () => {
  diContainer.registerFactory<HttpInstance>('HttpInstance', new HttpAdapter());
  diContainer.registerFactory<HttpInstance>(
    'GraphQLInstance',
    new GraphQLAdapter(),
  );
  diContainer.registerSingleton<ProductGateway>(
    'ProductGateway',
    new ProductService(diContainer.get<HttpInstance>('HttpInstance')),
  );
  diContainer.registerSingleton<ProductGateway>(
    'ProductUseCase',
    new ProductUseCase(diContainer.get<ProductGateway>('ProductGateway')),
  );
  diContainer.registerSingleton<CategoryGateway>(
    'CategoryGateway',
    new CategoryService(diContainer.get<HttpInstance>('GraphQLInstance')),
  );
  diContainer.registerSingleton<CategoryGateway>(
    'CategoryUseCase',
    new CategoryUseCase(diContainer.get<CategoryGateway>('CategoryGateway')),
  );
  return diContainer;
};

export const injector = _injector();
