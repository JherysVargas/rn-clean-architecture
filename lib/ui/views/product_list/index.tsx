import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {CardPoints} from './components/card_points';
import {SectionProductList} from './components/section_product_list';
import {useProducts} from './useProducts';
import {CategoriesList} from '../../components/organisms';

export const ListProducts: React.FC = () => {
  const headerHeight = useHeaderHeight();
  const {products, categories} = useProducts();

  return (
    <View style={{...styles.container, paddingTop: headerHeight + 25}}>
      {products.isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View style={styles.containerCategories}>
            <CategoriesList categories={categories.data!} />
          </View>
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
  containerCategories: {
    height: 100,
  },
});
