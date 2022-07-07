import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import OrderScreen from '@pages/Product/Order';

const Stack = createNativeStackNavigator();

const OrderdStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Order"
        component={OrderScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default OrderdStack;
