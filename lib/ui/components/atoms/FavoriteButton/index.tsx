import {Pressable, StyleProp, ViewStyle} from 'react-native';
import {Heart} from 'react-native-shapes';
import React from 'react';
import {fnStyles} from './styles';
import {primaryColor} from '../../../../config/theme/colors';

type Props = {
  onPress: () => void;
  isFavorite: boolean;
  iconSize?: number;
  buttonSize?: number;
  iconSelectedColor?: string;
  iconUnselectedColor?: string;
  buttonStyle?: StyleProp<ViewStyle>;
};

const FavoriteButton: React.FC<Props> = ({
  onPress,
  isFavorite = false,
  iconSize = 2,
  buttonSize = 45,
  iconSelectedColor = primaryColor,
  iconUnselectedColor = 'white',
  buttonStyle,
}) => {
  const styles = fnStyles(buttonSize);

  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle]}>
      <Heart
        color={isFavorite ? iconSelectedColor : iconUnselectedColor}
        size={iconSize}
      />
    </Pressable>
  );
};

export default FavoriteButton;
