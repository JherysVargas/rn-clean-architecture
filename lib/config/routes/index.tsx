import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import ListProducts from '../../ui/views/product_list/index';
import DetailProduct from '../../ui/views/detail_product';
import {lightPurpleColor} from '../theme/colors';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListProducts">
        <Stack.Screen
          name="ListProducts"
          component={ListProducts}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{
            headerStyle: {
              backgroundColor: lightPurpleColor,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
