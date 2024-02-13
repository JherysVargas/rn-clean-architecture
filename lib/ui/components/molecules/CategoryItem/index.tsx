import {Pressable, Text} from 'react-native';
import React from 'react';
import {ICategory} from '../../../../domain/interfaces';
import {CircleImage} from '../../atoms';
import {styles} from './styles';

type Props = {
  category: ICategory;
  handleSelectCategory?: (category: ICategory) => void;
};

export const CategoryItem: React.FC<Props> = ({
  category,
  handleSelectCategory,
}) => {
  return (
    <Pressable
      onPress={() => handleSelectCategory?.call(this, category)}
      style={styles.container}>
      <CircleImage source={{uri: category.image}} />
      <Text>{category.name}</Text>
    </Pressable>
  );
};

export default CategoryItem;
