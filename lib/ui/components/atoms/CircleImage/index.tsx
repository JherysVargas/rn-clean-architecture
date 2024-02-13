import {Image} from 'react-native';
import type {ImageSourcePropType} from 'react-native';
import React from 'react';
import {styles} from './styles';

const DEFAULT_SIZE = 40;

type Props = {
  source: ImageSourcePropType | undefined;
  size?: number;
};

export const CircleImage: React.FC<Props> = ({source, size = DEFAULT_SIZE}) => {
  return <Image source={source} style={styles(size).image} />;
};
