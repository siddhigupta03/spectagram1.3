import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackNav from '../Nav/Stack'
import Profile from '../Sceens/Profile'

const Drawer = createDrawerNavigator()

const drawerNav = () => {
return <Drawer.Navigator>
        <Drawer.Screen name='Home' component={StackNav}/>
        <Drawer.Screen name='Profile' component={Profile}/>
    </Drawer.Navigator>
}

export default drawerNav;