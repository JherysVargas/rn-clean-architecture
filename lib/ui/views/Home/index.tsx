import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import {CategoriesList, ProductList} from '../../components/organisms';

export const ListProducts: React.FC = () => {
  const headerHeight = useHeaderHeight();

  return (
    <View style={[styles.container, {paddingTop: headerHeight}]}>
      <CategoriesList />
      <ProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
  },
});
