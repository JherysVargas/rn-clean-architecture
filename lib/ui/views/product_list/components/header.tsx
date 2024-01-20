import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const HeaderListProducts = () => {
  return (
    <View>
      <Text style={styles.title}>Bienvenido de vuelta!</Text>
      <Text style={styles.subTitle}>Jherys Vargas</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#000000',
    fontWeight: '800',
  },
  subTitle: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
});
