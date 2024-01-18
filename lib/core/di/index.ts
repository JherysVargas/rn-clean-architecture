import {ProductGateway} from '../../domain/interfaces';
import {ProductService} from '../../infraestructure';
import {HttpAdapter, type HttpInstance} from '../adapters';
import {ProductUseCase} from '../../domain/use_cases';
import {diContainer} from './di_container';

const _injector = () => {
  diContainer.registerSingleton<HttpInstance>(
    'HttpInstance',
    new HttpAdapter(),
  );
  diContainer.registerSingleton<ProductGateway>(
    'ProductGateway',
    new ProductService(diContainer.get<HttpInstance>('HttpInstance')),
  );
  diContainer.registerFactory<ProductGateway>(
    'ProductUseCase',
    new ProductUseCase(diContainer.get<ProductGateway>('ProductGateway')),
  );

  return diContainer;
};

export const injector = _injector();
