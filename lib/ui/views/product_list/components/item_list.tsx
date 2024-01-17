import React from 'react';
import {View, Pressable, Text, Image, StyleSheet} from 'react-native';
import moment from 'moment';
import {IProduct} from '../../../../data/interfaces/product_interface';
import {greenColor, redColor} from '../../../../core/theme/colors';
import {useProductListController} from '../product_list_controller';

type IPropsItemList = {
  product: IProduct;
};

const ItemList = ({product}: IPropsItemList) => {
  const {handleDetailProduct} = useProductListController();

  return (
    <Pressable
      onPress={_ => handleDetailProduct(product)}
      style={styles.container}>
      <Image source={{uri: product.image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {product.product}
        </Text>
        <Text style={styles.date}>
          {moment(product.createdAt).format('LL')}
        </Text>
      </View>
      <View style={styles.containerPoints}>
        <Text style={styles.textPoint}>
          <Text
            style={
              product.is_redemption
                ? styles.symbolNegative
                : styles.symbolPositive
            }
            numberOfLines={1}>
            {product.is_redemption ? '- ' : '+ '}
          </Text>
          {product.points}
        </Text>
      </View>
      <Text style={styles.arrow}>{'>'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  content: {
    flex: 2,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 14,
    marginBottom: 6,
    fontWeight: '800',
  },
  date: {
    fontSize: 12,
    fontWeight: '400',
  },
  containerPoints: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    fontSize: 18,
    fontWeight: '800',
  },
  textPoint: {
    fontSize: 14,
    fontWeight: '800',
  },
  symbolPositive: {
    color: greenColor,
  },
  symbolNegative: {
    color: redColor,
  },
});

export default ItemList;
