import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {CardPoints} from './components/card_points';
import {SectionProductList} from './components/section_product_list';
import {useProducts} from './useProducts';

export const ListProducts: React.FC = () => {
  const headerHeight = useHeaderHeight();
  const {isLoading} = useProducts();

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
