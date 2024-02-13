import {View} from 'react-native';
import React from 'react';
import {styles} from './styles';

type Props = {
  spacing?: number;
  horizontal?: boolean;
};

const Divider: React.FC<Props> = ({spacing = 10, horizontal = true}) => {
  return <View style={styles(spacing, horizontal).divider} />;
};

export default Divider;
