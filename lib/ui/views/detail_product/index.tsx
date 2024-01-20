import React, {useEffect} from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../../core/providers/config';
import {IProduct} from '../../../domain/interfaces/product/product';
import TitleSection from '../../components/title_section';
import moment from 'moment';
import Button from '../../components/button';
import {styles} from './styles';

export const DetailProduct = ({navigation}: any) => {
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
