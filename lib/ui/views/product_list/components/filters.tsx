import React from 'react';
import {StyleSheet, View} from 'react-native';
import RNPickerSelect, {Item} from 'react-native-picker-select';
import {FilterType} from '../../../../data/enums/filters_enum';
import {Chevron} from 'react-native-shapes';
import {primaryColor} from '../../../../core/theme/colors';
import {useProductListController} from '../product_list_controller';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../core/redux/config';

const filters: Item[] = [
  {label: 'Todos', value: FilterType.ALL},
  {label: 'Ganados', value: FilterType.POSITIVE},
  {label: 'Canjeados', value: FilterType.NEGATIVE},
];

const Filters = () => {
  const selectedFilter = useSelector<RootState, FilterType>(
    state => state.products.selectedFilter,
  );
  const {handleSelectedFilter} = useProductListController();

  return (
    <View style={styles.containerPicker}>
      <RNPickerSelect
        items={filters}
        style={styles}
        value={selectedFilter}
        onValueChange={handleSelectedFilter}
        placeholder={{}}
        useNativeAndroidPickerStyle={false}
      />
      <Chevron size={1.2} color={primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputAndroidContainer: {
    padding: 6,
  },
  inputIOSContainer: {
    padding: 6,
  },
  containerPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputIOS: {
    fontSize: 16,
    marginRight: 6,
    fontWeight: '600',
    color: primaryColor,
  },
  inputAndroid: {
    fontSize: 16,
    marginRight: 6,
    fontWeight: '600',
    color: primaryColor,
  },
});

export default Filters;
