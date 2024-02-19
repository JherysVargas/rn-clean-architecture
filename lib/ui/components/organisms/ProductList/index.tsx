import {FlatList, ListRenderItem} from 'react-native';
import React, {useCallback} from 'react';
import {IProduct} from '../../../../domain/interfaces';
import {ProductItem} from '../../molecules';
import Divider from '../../atoms/Divider';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useProducts} from '../../../views/Home/useProducts';

const renderDivider = () => <Divider spacing={12} horizontal={false} />;

export const ProductList: React.FC = () => {
  const {bottom} = useSafeAreaInsets();
  const {products, handleDetailProduct} = useProducts();

  const _renderItem: ListRenderItem<IProduct> = useCallback(
    ({item}) => (
      <ProductItem
        isLoading={products.isLoading}
        product={item}
        handleSelectProduct={handleDetailProduct}
      />
    ),
    [handleDetailProduct, products.isLoading],
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
