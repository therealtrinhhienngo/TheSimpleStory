import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import LoginScreen from './views/login_screen';
import { Routes } from './config/routes_config';
import RegisterScreen from './views/register_screen';
import HomeScreen from './views/home_screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.HomeScreen}>
            <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name={Routes.RegisterScreen} component={RegisterScreen} options={{headerShown: false}}/>
            <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App