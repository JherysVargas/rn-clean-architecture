import {FlatList, ListRenderItem} from 'react-native';
import React, {useCallback} from 'react';
import {ICategory} from '../../../../domain/interfaces';
import {CategoryItem} from '../../molecules';
import Divider from '../../atoms/Divider';
import {styles} from './styles';

type Props = {
  categories: ICategory[];
  handleSelectCategory?: (category: ICategory) => void;
};

const renderDivider = () => <Divider spacing={20} />;

export const CategoriesList: React.FC<Props> = ({
  categories,
  handleSelectCategory,
}) => {
  const _renderItem: ListRenderItem<ICategory> = useCallback(
    ({item}) => (
      <CategoryItem
        category={item}
        handleSelectCategory={handleSelectCategory}
      />
    ),
    [handleSelectCategory],
  );

  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={_renderItem}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={renderDivider}
      style={styles.container}
    />
  );
};
