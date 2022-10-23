import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Expenses from '../screens/Expenses';
import Home from '../screens/Home';
import ShoppingList from '../screens/Shopping';
import Tasks from '../screens/Tasks';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Expenses" component={Expenses} />
      <Stack.Screen name="Shopping" component={ShoppingList} />
      <Stack.Screen name="Tasks" component={Tasks} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
