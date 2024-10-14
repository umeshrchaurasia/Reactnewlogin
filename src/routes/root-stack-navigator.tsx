import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './bottom-tab-navigator/bottom-tab-navigator';
import Products from '../screens/products/products';
import ProductDescription from '../screens/product-description/product-description';

const Stack = createNativeStackNavigator<any>();
const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen
          name="ProductDescription"
          component={ProductDescription}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
