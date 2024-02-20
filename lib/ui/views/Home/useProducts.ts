import {
  setFavoritesProducts,
  setSelectedProduct,
} from '../../../core/providers/products';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {IProduct} from '../../../domain/interfaces/product/product';
import {useCallback} from 'react';
import {injector} from '../../../core/di';
import {CategoryGateway, ProductGateway} from '../../../domain/interfaces';
import {setSelectedCategory} from '../../../core/providers/categories';
import {RootState} from '../../../core/providers/config';
import {useQuery} from '@tanstack/react-query';

const productUseCase = injector.get<ProductGateway>('ProductUseCase');
const categoryUseCase = injector.get<CategoryGateway>('CategoryUseCase');

export const useProducts = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();

  const selectedCategory = useSelector<RootState, string>(
    state => state.categories.selectedCategory ?? '',
  );

  const products = useQuery({
    queryKey: ['products', selectedCategory],
    queryFn: () =>
      selectedCategory
        ? productUseCase.getProductsByCategory(selectedCategory)
        : productUseCase.getProducts(),
  });

  const categories = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryUseCase.getCategories(),
  });

  const handleGetFavorites = useCallback(async () => {
    const favorites = await productUseCase.getFavorites();

    dispatch(setFavoritesProducts(favorites));
  }, [dispatch]);

  const handleSelectCategory = useCallback(
    (categoryID: string): void => {
      dispatch(setSelectedCategory(categoryID));
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
    categories,
    selectedCategory,
    handleGetFavorites,
    handleDetailProduct,
    handleSelectCategory,
  };
};
