import React, {useCallback} from 'react';
import {View, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import TitleSection from '../../../components/title_section';
import {useSelector} from 'react-redux';
import {IProduct} from '../../../../domain/interfaces/product/product';
import {RootState} from '../../../../core/providers/config';
import ItemList from './item_list';
import Filters from './filters';

const renderSeparator = () => <View style={styles.separator} />;

const SectionProductList = () => {
  const products = useSelector<RootState, IProduct[]>(
    state => state.products.filterProductList,
  );

  const _renderItem: ListRenderItem<IProduct> = useCallback(({item}) => {
    return <ItemList product={item} />;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <TitleSection title="TUS MOVIMIENTOS" />
        <Filters />
      </View>
      <FlatList
        data={products}
        nestedScrollEnabled
        renderItem={_renderItem}
        style={styles.containerList}
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 35,
    marginBottom: 20,
  },
  containerList: {
    flex: 1,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  contentContainerStyle: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  separator: {
    height: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default SectionProductList;
