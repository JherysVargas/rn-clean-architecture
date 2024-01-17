import React, {useMemo} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TitleSection from '../../../components/title_section';
import {primaryColor} from '../../../../core/theme/colors';
import {useCurrencyFormat} from '../../../../core/hooks/use_currency_format';
import {useSelector} from 'react-redux';
import {IProduct} from '../../../../data/interfaces/product_interface';
import {RootState} from '../../../../core/redux/config';

const CardPoints = () => {
  const products = useSelector<RootState, IProduct[]>(
    state => state.products.allProductList,
  );

  const _getTotalPoints = useMemo(() => {
    let accumulator: number = 0;

    for (const product of products) {
      if (product.is_redemption) {
        accumulator += product.points;
      }
    }

    return accumulator;
  }, [products]);

  return (
    <View>
      <TitleSection title="TUS PUNTOS" />
      <View style={styles.card}>
        <Text style={styles.monthText}>Diciembre</Text>
        <View style={styles.containerPoints}>
          <Text style={styles.pointText}>
            {useCurrencyFormat(_getTotalPoints)} pts
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 145,
    marginTop: 20,
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: primaryColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  monthText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '800',
  },
  containerPoints: {
    flex: 1,
    justifyContent: 'center',
  },
  pointText: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default CardPoints;
