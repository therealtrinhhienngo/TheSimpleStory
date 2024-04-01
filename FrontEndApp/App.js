import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'
import LoginScreen from './views/login_screen';
import { Routes } from './config/routes_config';
import RegisterScreen from './views/register_screen';
import HomeScreen from './views/home_screen';
import UserScreen from './views/user_screen';
import SearchScreen from './views/search_screen';
import SearchResultScreen from './views/search_result_screen';
import FriendshipScreen from './views/friendship_screen';
import SettingScreen from './views/setting_screen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.HomeScreen}>
            <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} options={{headerShown: false}}/>
            <Stack.Screen name={Routes.RegisterScreen} component={RegisterScreen} options={{headerShown: false}}/>
            <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name={Routes.UserScreen} component={UserScreen} options={{headerShown: false}}/>
            <Stack.Screen name={Routes.SearchScreen} component={SearchScreen} options={{headerShown: false}}/>
            <Stack.Screen name={Routes.SearchResultScreen} component={SearchResultScreen} options={{headerShown: false}}/>
            <Stack.Screen name={Routes.FriendshipScreen} component={FriendshipScreen} options={{headerShown: false}}/>
            <Stack.Screen name={Routes.SettingScreen} component={SettingScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App