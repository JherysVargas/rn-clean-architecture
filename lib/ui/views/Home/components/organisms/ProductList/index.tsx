import {FlatList, ListRenderItem} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {IProduct} from '../../../../../../domain/interfaces';
import {ProductItem} from '../../../../../components/molecules';
import Divider from '../../../../../components/atoms/Divider';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useProducts} from '../../../useProducts';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../../core/providers/config';
import {useDetailProduct} from '../../../../DetailProduct/useDetailProduct';

const renderDivider = () => <Divider spacing={12} horizontal={false} />;

export const ProductList: React.FC = () => {
  const {bottom} = useSafeAreaInsets();
  const {products, handleDetailProduct, handleGetFavorites} = useProducts();
  const {handleToogleFavorite} = useDetailProduct();

  const favorites = useSelector<RootState, number[]>(
    state => state.products.favorites,
  );

  useEffect(() => {
    handleGetFavorites();
  }, [handleGetFavorites]);

  const _renderItem: ListRenderItem<IProduct> = useCallback(
    ({item}) => (
      <ProductItem
        isFavorite={favorites.includes(item.id)}
        heroTag={`image-${item?.id?.toString() ?? ''}`}
        isLoading={products.isLoading}
        product={item}
        handleSelectProduct={handleDetailProduct}
        handlePressFavorite={() => handleToogleFavorite(item.id, favorites)}
      />
    ),
    [favorites, handleDetailProduct, handleToogleFavorite, products.isLoading],
  );

  return (
    <FlatList
      data={
        products.isLoading
          ? (Array.from({length: 20}) as IProduct[])
          : products.data
      }
      renderItem={_renderItem}
      keyExtractor={(item, index) => item?.id?.toString() ?? index.toString()}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={renderDivider}
      style={styles.container}
      contentContainerStyle={{paddingBottom: bottom}}
    />
  );
};
