import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
} from 'react-native';
import {primaryColor} from '../../config/theme/colors';

type IPropsButton = {
  label: string;
  style?: ViewStyle;
  onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
};

const Button = ({label, style, onPress}: IPropsButton) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: primaryColor,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  },
});

export default Button;
