import {ProductGateway, CategoryGateway} from '../../domain/interfaces';
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
  diContainer.registerSingleton<CategoryGateway>(
    'CategoryGateway',
    new CategoryService(diContainer.get<HttpInstance>('GraphQLInstance')),
  );
  return diContainer;
};

export const injector = _injector();
