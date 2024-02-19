import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  title?: string;
  subTitle?: string;
};

export const CustomHeader: React.FC<Props> = ({title, subTitle}) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={[styles.container, {paddingTop: top + 8}]}>
      <Text style={styles.title}>{title}</Text>
      {subTitle ? <Text style={styles.subTitle}>{subTitle}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 4,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '800',
  },
  subTitle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
});
