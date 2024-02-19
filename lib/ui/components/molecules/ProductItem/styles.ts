import {StyleSheet} from 'react-native';
import {greyColor, primaryColor} from '../../../../config/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    columnGap: 12,
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  containerTitle: {
    columnGap: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerDescription: {
    flex: 1,
    rowGap: 6,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 6,
  },
  title: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
  },
  price: {
    fontSize: 14,
    color: primaryColor,
    fontWeight: '600',
  },
  description: {
    flex: 1,
    fontSize: 13,
    color: greyColor,
  },
});
