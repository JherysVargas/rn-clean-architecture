import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import {greyColor} from '../../config/theme/colors';

type IPropsTitleSection = {
  title: string;
  style?: TextStyle;
};

const TitleSection = ({title, style}: IPropsTitleSection) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    color: greyColor,
    fontWeight: '600',
  },
});

export default TitleSection;
