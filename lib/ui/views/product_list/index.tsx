import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderListProducts from './components/header';
import {useHeaderHeight} from '@react-navigation/elements';
import CardPoints from './components/card_points';
import SectionProductList from './components/section_product_list';
import {useProductListController} from './product_list_controller';

const ListProducts = ({navigation}: any) => {
  const headerHeight = useHeaderHeight();
  const {getProdcts} = useProductListController();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: HeaderListProducts,
    });
    getProdcts();
  }, [navigation, getProdcts]);

  return (
    <View style={{...styles.container, paddingTop: headerHeight + 25}}>
      <CardPoints />
      <SectionProductList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
  },
});

export default ListProducts;
