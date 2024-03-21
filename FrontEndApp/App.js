import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import LoginScreen from './views/login_screen';
import { Routes } from './config/routes_config';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.LoginScreen}>
            <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name={Routes.RegisterScreen} component={LoginScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App