import {setSelectedProduct} from '../../../core/providers/products';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {IProduct} from '../../../domain/interfaces/product/product';
import {useCallback} from 'react';
import {injector} from '../../../core/di';
import {ProductGateway} from '../../../domain/interfaces';
import {toogleFavorite} from '../../../core/providers/products';

const productUseCase = injector.get<ProductGateway>('ProductUseCase');

export const useDetailProduct = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const handleToogleFavorite = useCallback(
    (productID: number, favorites: number[]): void => {
      if (favorites.includes(productID)) {
        productUseCase.removeFavorite(productID);
      } else {
        productUseCase.addFavorite(productID);
      }

      dispatch(toogleFavorite(productID));
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
    handleDetailProduct,
    handleToogleFavorite,
  };
};
