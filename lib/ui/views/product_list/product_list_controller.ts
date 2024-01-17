import axios from 'axios';
import {
  setProductsList,
  setSelectedFilter,
  setSelectedProduct,
} from '../../../core/redux/reducers/products_reducer';
import {useDispatch} from 'react-redux';
import {FilterType} from '../../../data/enums/filters_enum';
import {useNavigation} from '@react-navigation/native';
import {IProduct} from '../../../data/interfaces/product_interface';
import {Navigation} from '../../../data/types/navigation_type';
import ProductService from '../../../core/services/product_service';

export const useProductListController = () => {
  const productService = new ProductService(axios);
  const dispatch = useDispatch();
  const navigation = useNavigation<Navigation>();

  const getProdcts = async (): Promise<void> => {
    const products = await productService.getProducts();
    if (products) {
      dispatch(setProductsList(products));
    }
  };

  const handleSelectedFilter = (value: FilterType): void => {
    dispatch(setSelectedFilter(value));
  };

  const handleDetailProduct = (product: IProduct): void => {
    dispatch(setSelectedProduct(product));
    navigation.navigate('DetailProduct');
  };

  return {
    getProdcts,
    handleDetailProduct,
    handleSelectedFilter,
  };
};
