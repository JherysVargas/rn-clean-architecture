import {StyleSheet, Dimensions} from 'react-native';
import {
  greyColor,
  lightGreyColor,
  primaryColor,
} from '../../../../../../config/theme/colors';

const {height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  panel: {
    backgroundColor: 'white',
    borderRadius: 15,
    position: 'relative',
    top: height * 0.4,
    height: height * 0.6,
    paddingHorizontal: 25,
    paddingTop: 25,
  },
  containerDataProduct: {
    flex: 1,
  },
  containerRowTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerTitle: {
    rowGap: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
    color: primaryColor,
  },
  containerDescription: {
    rowGap: 12,
    marginTop: 20,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: lightGreyColor,
    borderBottomWidth: 1,
    borderBottomColor: lightGreyColor,
  },
  titleDescription: {
    fontSize: 16,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: greyColor,
  },
});
