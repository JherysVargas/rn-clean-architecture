import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {RootState} from '../../../../../../core/providers/config';
import {useSelector} from 'react-redux';
import FavoriteButton from '../../../../../components/atoms/FavoriteButton';
import {Button} from '../../../../../components/atoms';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDetailProduct} from '../../../useDetailProduct';
import {InitialStateProductReducer} from '../../../../../../domain/types';

export const PanelDescription: React.FC = () => {
  const {detailProduct, favorites} = useSelector<
    RootState,
    InitialStateProductReducer
  >(state => state.products);

  const {bottom} = useSafeAreaInsets();
  const {handleToogleFavorite} = useDetailProduct();

  return (
    <View style={[styles.panel, {paddingBottom: bottom}]}>
      <ScrollView style={styles.containerDataProduct}>
        <View style={styles.containerRowTitle}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>{detailProduct!.title}</Text>
            <Text style={styles.price}>${detailProduct!.price}</Text>
          </View>
          <FavoriteButton
            onPress={() => handleToogleFavorite(detailProduct!.id, favorites)}
            isFavorite={favorites.includes(detailProduct!.id)}
          />
        </View>
        <View style={styles.containerDescription}>
          <Text style={styles.titleDescription}>Descripción</Text>
          <Text style={styles.description}>{detailProduct!.description}</Text>
        </View>
      </ScrollView>
      <Button label="Agregar" />
    </View>
  );
};
