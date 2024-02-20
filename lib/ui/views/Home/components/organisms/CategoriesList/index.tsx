import {FlatList, ListRenderItem} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {ICategory} from '../../../../../../domain/interfaces';
import {CategoryItem} from '../../../../../components/molecules';
import Divider from '../../../../../components/atoms/Divider';
import {styles} from './styles';
import {useProducts} from '../../../useProducts';

const renderDivider = () => <Divider spacing={10} />;

export const CategoriesList: React.FC = () => {
  const {categories, selectedCategory, handleSelectCategory} = useProducts();

  useEffect(() => {
    handleSelectCategory(categories.data?.at(0)?.id ?? '');
  }, [categories.data, handleSelectCategory]);

  const _renderItem: ListRenderItem<ICategory> = useCallback(
    ({item}) => (
      <CategoryItem
        category={item}
        isSelected={selectedCategory === item?.id}
        isLoading={categories.isLoading}
        handleSelectCategory={handleSelectCategory}
      />
    ),
    [selectedCategory, categories.isLoading, handleSelectCategory],
  );

  return (
    <FlatList
      horizontal
      data={
        categories.isLoading
          ? (Array.from({length: 10}) as ICategory[])
          : categories.data
      }
      renderItem={_renderItem}
      keyExtractor={(item, index) => item?.id ?? index.toString()}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={renderDivider}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    />
  );
};
