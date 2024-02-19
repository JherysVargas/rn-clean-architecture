import {Pressable, Text} from 'react-native';
import React from 'react';
import {ICategory} from '../../../../domain/interfaces';
import {CircleImage} from '../../atoms';
import {styles} from './styles';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

type Props = {
  isSelected?: boolean;
  isLoading?: boolean;
  category: ICategory;
  handleSelectCategory?: (categoryId: string) => void;
};

const LoadingCategoryItem: React.FC = () => {
  return (
    <Placeholder Animation={Fade} style={styles.containerLoading}>
      <PlaceholderMedia style={styles.imageLoading} />
      <PlaceholderLine />
    </Placeholder>
  );
};

export const CategoryItem: React.FC<Props> = ({
  category,
  isLoading = false,
  isSelected = false,
  handleSelectCategory,
}) => {
  if (isLoading) {
    return <LoadingCategoryItem />;
  }

  return (
    <Pressable
      onPress={() => handleSelectCategory?.call(this, category.id)}
      style={[
        styles.container,
        isSelected ? styles.selected : styles.unselected,
      ]}>
      <CircleImage source={{uri: category.image}} />
      <Text>{category.name}</Text>
    </Pressable>
  );
};
