import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {CardPoints} from './components/card_points';
import {SectionProductList} from './components/section_product_list';
import {useProducts} from './useProducts';
import {ProductGateway} from '../../../domain/interfaces';
import {useQuery} from '@tanstack/react-query';

type Props = {
  service: ProductGateway;
};

export const ListProducts: React.FC<Props> = ({service}) => {
  const headerHeight = useHeaderHeight();
  const {handleSetProducts} = useProducts();

  const {data, isLoading, isSuccess} = useQuery({
    queryKey: ['products'],
    queryFn: () => service.getProducts(),
  });

  if (isSuccess) {
    handleSetProducts(data);
  }

  return (
    <View style={{...styles.container, paddingTop: headerHeight + 25}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <CardPoints />
          <SectionProductList />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
  },
});
