import {StyleSheet} from 'react-native';

export const styles = (size: number) =>
  StyleSheet.create({
    image: {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
  });
