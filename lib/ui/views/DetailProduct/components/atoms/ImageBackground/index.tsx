import React from 'react';
import ImageAnimated from '../../../../../components/atoms/Image';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../../core/providers/config';
import {IProduct} from '../../../../../../domain/interfaces';
import {styles} from './styles';

export const ImageBackground = () => {
  const selectedProduct = useSelector<RootState, IProduct>(
    state => state.products.detailProduct!,
  );

  return (
    <ImageAnimated
      heroTag={`image-${selectedProduct.id.toString()}`}
      source={{uri: selectedProduct.images.at(0)}}
      style={styles.image}
    />
  );
};
