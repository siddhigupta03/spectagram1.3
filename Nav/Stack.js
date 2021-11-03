import React from 'react';
import { createStackNavigator } from '@react-navigation/Stack';

import Home from '../Nav/TabNav'
import PostScreen from '../Sceens/PostScreen'

const Stack = createStackNavigator()

const StackNav = () => {
return <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='PostScreen' component={PostScreen}/>
    </Stack.Navigator>
}

export default StackNav;