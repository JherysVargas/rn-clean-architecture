import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

// Components
import {CustomHeader} from '../../ui/components/molecules';

// Pages
import {ListProducts} from '../../ui/views/Home';
import {DetailProduct} from '../../ui/views/DetailProduct';

const Stack = createNativeStackNavigator();

const renderHeader = (props: NativeStackHeaderProps) => (
  <CustomHeader {...props.route.params} />
);

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={ListProducts}
          initialParams={{
            title: 'Bienvenido de vuelta!',
            subTitle: 'Jherys Vargas',
          }}
          options={{
            title: '',
            headerTransparent: true,
            header: renderHeader,
          }}
        />
        <Stack.Screen
          name="DetailProduct"
          component={DetailProduct}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
