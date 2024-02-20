import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.45,
    position: 'absolute',
  },
});
