import {StyleSheet} from 'react-native';

export const styles = (spacing: number, horizontal: boolean) =>
  StyleSheet.create({
    divider: horizontal ? {width: spacing} : {height: spacing},
  });
