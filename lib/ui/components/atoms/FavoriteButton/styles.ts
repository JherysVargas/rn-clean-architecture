import {StyleSheet} from 'react-native';
import {lightBlueColor} from '../../../../config/theme/colors';

export const fnStyles = (size: number) =>
  StyleSheet.create({
    button: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: lightBlueColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
