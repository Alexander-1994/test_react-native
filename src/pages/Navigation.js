import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './MainPage';
import CreationPage from './CreationPage';

const Stack = createStackNavigator();

export const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={MainPage} options={{headerShown: false}} />
                <Stack.Screen name="creation" component={CreationPage} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

// Здесь я создаю навигацию приложения