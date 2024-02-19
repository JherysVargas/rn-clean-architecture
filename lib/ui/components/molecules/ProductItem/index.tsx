import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {IProduct} from '../../../../domain/interfaces';
import {styles} from './styles';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

type Props = {
  isLoading?: boolean;
  product: IProduct;
  handleSelectProduct?: (product: IProduct) => void;
};

const renderImageLoading = () => <PlaceholderMedia style={styles.image} />;

const LoadingProductItem: React.FC = () => {
  return (
    <Placeholder
      Animation={Fade}
      style={styles.container}
      Left={renderImageLoading}>
      <View style={styles.containerDescription}>
        <View style={styles.containerTitle}>
          <PlaceholderLine width={80} />
          <PlaceholderLine width={10} />
        </View>
        <PlaceholderLine />
      </View>
    </Placeholder>
  );
};

export const ProductItem: React.FC<Props> = ({
  product,
  isLoading = false,
  handleSelectProduct,
}) => {
  if (isLoading) {
    return <LoadingProductItem />;
  }

  return (
    <Pressable
      style={styles.container}
      onPress={() => handleSelectProduct?.call(this, product)}>
      <Image source={{uri: product.images.at(0)}} style={styles.image} />
      <View style={styles.containerDescription}>
        <View style={styles.containerTitle}>
          <Text numberOfLines={1} style={styles.title}>
            {product.title}
          </Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
        <Text style={styles.description} numberOfLines={3}>
          {product.description}
        </Text>
      </View>
    </Pressable>
  );
};
