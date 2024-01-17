import React, {useEffect} from 'react';
import {View, ScrollView, Text, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../core/redux/config';
import {IProduct} from '../../../data/interfaces/product_interface';
import TitleSection from '../../components/title_section';
import moment from 'moment';
import Button from '../../components/button';

const DetailProduct = ({navigation}: any) => {
  const detailProduct: IProduct = useSelector<RootState, IProduct>(
    state => state.products.detailProduct!,
  );

  useEffect(() => {
    navigation.setOptions({
      title: detailProduct.product,
    });
  }, [navigation, detailProduct]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={{uri: detailProduct.image}} style={styles.image} />
      </View>
      <TitleSection style={styles.textTitle} title="Detalles del producto:" />
      <Text style={styles.dateText}>
        Comprado el {moment(detailProduct.createdAt).format('LL')}
      </Text>
      <TitleSection
        style={styles.textTitle}
        title="Con esta compra acumulaste:"
      />
      <Text style={styles.pointsText}>{detailProduct.points} puntos</Text>
      <Button
        style={styles.button}
        label="Aceptar"
        onPress={() => navigation.goBack()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  containerImage: {
    height: 350,
    padding: 75,
    borderRadius: 10,
    marginBottom: 35,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    flex: 1,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '800',
    marginVertical: 20,
  },
  pointsText: {
    fontSize: 24,
    marginTop: 32,
    fontWeight: '800',
  },
  textTitle: {
    fontSize: 14,
  },
  button: {
    marginTop: 50,
  },
});

export default DetailProduct;
