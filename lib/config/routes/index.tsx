import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import {ListProducts} from '../../ui/views/product_list/index';
import {DetailProduct} from '../../ui/views/detail_product';
import {HeaderListProducts} from '../../ui/views/product_list/components/header';

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
            headerLeft: HeaderListProducts,
          }}
        />
        <Stack.Screen name="DetailProduct" component={DetailProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
