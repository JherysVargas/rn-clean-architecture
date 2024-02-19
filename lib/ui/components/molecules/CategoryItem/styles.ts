import {StyleSheet} from 'react-native';
import {lightBlueColor, lightGreyColor} from '../../../../config/theme/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 50,
  },
  containerLoading: {
    flex: 1,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageLoading: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginBottom: 6,
  },
  selected: {
    backgroundColor: lightBlueColor,
  },
  unselected: {
    backgroundColor: lightGreyColor,
  },
});
