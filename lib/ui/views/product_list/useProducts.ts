import {
  setProducts,
  setSelectedFilter,
  setSelectedProduct,
} from '../../../core/providers/products_redux/products';
import {useDispatch} from 'react-redux';
import {FilterType} from '../../../domain/enums/filters_enum';
import {useNavigation} from '@react-navigation/native';
import {IProduct} from '../../../domain/interfaces/product/product';
import {Navigation} from '../../../domain/types/navigation_type';
import {useCallback} from 'react';

export const useProducts = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<Navigation>();

  const handleSetProducts = useCallback(
    (products: IProduct[]): void => {
      dispatch(setProducts(products));
    },
    [dispatch],
  );

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
    handleSetProducts,
    handleDetailProduct,
    handleSelectedFilter,
  };
};
