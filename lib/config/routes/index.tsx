import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

// Pages
import {ListProducts} from '../../ui/views/Home';
import {CustomHeader} from '../../ui/components/molecules';

const Stack = createNativeStackNavigator();

const renderHeader = (props: NativeStackHeaderProps) => (
  <CustomHeader {...props.route.params} />
);

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListProducts">
        <Stack.Screen
          name="ListProducts"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
