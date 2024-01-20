import React, {useMemo} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TitleSection from '../../../components/title_section';
import {primaryColor} from '../../../../config/theme/colors';
import {useCurrencyFormat} from '../../../../core/hooks/use_currency_format';
import {useProducts} from '../useProducts';

export const CardPoints = () => {
  const {data} = useProducts();

  const _getTotalPoints = useMemo(
    () =>
      data?.reduce<number>((prev, current) => {
        if (current.is_redemption) {
          prev += current.points;
        }

        return prev;
      }, 0),
    [data],
  );

  return (
    <View>
      <TitleSection title="TUS PUNTOS" />
      <View style={styles.card}>
        <Text style={styles.monthText}>Diciembre</Text>
        <View style={styles.containerPoints}>
          <Text style={styles.pointText}>
            {useCurrencyFormat(_getTotalPoints!)} pts
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
