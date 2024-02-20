import {ProductGateway, CategoryGateway} from '../../domain/interfaces';
import {CategoryUseCase, ProductUseCase} from '../../domain/use_cases';
import {ProductService, CategoryService} from '../../infraestructure';
import {
  HttpAdapter,
  GraphQLAdapter,
  type HttpInstance,
  LocalStorageInstance,
  LocalStorageAdapter,
} from '../adapters';
import {diContainer} from './di_container';

const _injector = () => {
  diContainer.registerFactory<LocalStorageInstance>(
    'LocalStorageInstance',
    new LocalStorageAdapter(),
  );
  diContainer.registerFactory<HttpInstance>('HttpInstance', new HttpAdapter());
  diContainer.registerFactory<HttpInstance>(
    'GraphQLInstance',
    new GraphQLAdapter(),
  );
  diContainer.registerSingleton<ProductGateway>(
    'ProductGateway',
    new ProductService(
      diContainer.get<HttpInstance>('HttpInstance'),
      diContainer.get<LocalStorageInstance>('LocalStorageInstance'),
    ),
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
