import {
  setProductsList,
  setSelectedFilter,
  setSelectedProduct,
} from '../../../core/providers/reducers/products';
import {useDispatch} from 'react-redux';
import {FilterType} from '../../../domain/enums/filters_enum';
import {useNavigation} from '@react-navigation/native';
import {IProduct} from '../../../domain/interfaces/product/product';
import {Navigation} from '../../../domain/types/navigation_type';
import {injector} from '../../../core/di';
import {ProductGateway} from '../../../domain/interfaces';
import {useCallback} from 'react';

const productService = injector.get<ProductGateway>('ProductUseCase');

export const useProductListController = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<Navigation>();

  const getProdcts = useCallback(async (): Promise<void> => {
    const products = await productService.getProducts();
    if (products) {
      dispatch(setProductsList(products));
    }
  }, [dispatch]);

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
    getProdcts,
    handleDetailProduct,
    handleSelectedFilter,
  };
};
