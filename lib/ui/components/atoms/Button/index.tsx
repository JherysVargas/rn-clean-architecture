import React from 'react';
import {Pressable, Text, GestureResponderEvent, ViewStyle} from 'react-native';
import {styles} from './styles';

type Props = {
  label: string;
  style?: ViewStyle;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

export const Button = ({label, style, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};
