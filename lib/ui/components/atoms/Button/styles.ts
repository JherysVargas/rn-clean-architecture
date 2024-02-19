import {StyleSheet} from 'react-native';
import {primaryColor} from '../../../../config/theme/colors';

export const styles = StyleSheet.create({
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
