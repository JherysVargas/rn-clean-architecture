import {
  setSelectedFilter,
  setSelectedProduct,
} from '../../../core/providers/products/products';
import {useDispatch} from 'react-redux';
import {FilterType} from '../../../domain/enums/filters_enum';
import {useNavigation} from '@react-navigation/native';
import {IProduct} from '../../../domain/interfaces/product/product';
import {Navigation} from '../../../domain/types/navigation_type';
import {useCallback} from 'react';
import {injector} from '../../../core/di';
import {ProductGateway} from '../../../domain/interfaces';
import {useProductsUseCase} from '../../../infraestructure/hooks/useProductUseCase';

const productUseCase = injector.get<ProductGateway>('ProductUseCase');

export const useProducts = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<Navigation>();

  const {products} = useProductsUseCase({productUseCase});

  const handleSelectedFilter = useCallback(
    (value: FilterType): void => {
      dispatch(setSelectedFilter(value));
    },
    [dispatch],
  );

  const handleDetailProduct = useCallback(
    (product: IProduct): void => {
      dispatch(setSelectedProduct(product));
      navigation.navigate('DetailProduct');
    },
    [dispatch, navigation],
  );

  return {
    products,
    handleDetailProduct,
    handleSelectedFilter,
  };
};
