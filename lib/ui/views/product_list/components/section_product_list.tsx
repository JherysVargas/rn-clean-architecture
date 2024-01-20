import React, {useCallback, useMemo} from 'react';
import {View, StyleSheet, FlatList, ListRenderItem} from 'react-native';
import TitleSection from '../../../components/title_section';
import {IProduct} from '../../../../domain/interfaces/product/product';
import {ItemList} from './item_list';
import {Filters} from './filters';
import {useProducts} from '../useProducts';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../core/providers/config';
import {FilterType} from '../../../../domain/enums/filters_enum';

const renderSeparator = () => <View style={styles.separator} />;

export const SectionProductList = () => {
  const {data, handleDetailProduct} = useProducts();
  const filter = useSelector<RootState, FilterType>(
    state => state.products.selectedFilter,
  );

  const _renderItem: ListRenderItem<IProduct> = useCallback(
    ({item}) => {
      return (
        <ItemList handleDetailProduct={handleDetailProduct} product={item} />
      );
    },
    [handleDetailProduct],
  );

  const filterData = useMemo(() => {
    switch (filter) {
      case FilterType.NEGATIVE: {
        return data!.filter((product: IProduct) => product.is_redemption);
      }
      case FilterType.POSITIVE: {
        return data!.filter((product: IProduct) => !product.is_redemption);
      }
      default: {
        return data;
      }
    }
  }, [data, filter]);

  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <TitleSection title="TUS MOVIMIENTOS" />
        <Filters />
      </View>
      <FlatList
        data={filterData}
        keyExtractor={item => item.id}
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
