import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from "react-redux";
import { Routes } from '../config/routes_config';
import HomeScreen from './home_screen';
import LoginScreen from './login_screen';

const AuthenticationScreen = () => {
    const Stack = createNativeStackNavigator();
    const isAuthenticated = useSelector(state => state.isAuthenticated);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isAuthenticated ? (
                    <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
                ) : (
                    <Stack.Screen name={Routes.LoginScreen} component={LoginScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AuthenticationScreen;