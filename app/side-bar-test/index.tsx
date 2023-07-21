import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import { Sidebar } from  "../sidebar/index.tsx";

const Drawer = createDrawerNavigator();

const SidebarTest = () =>{
    return(
        <NavigationContainer>
            <Drawer.Navigator drawerContent = {props => <Sidebar {...props}  />}>
                <Drawer.Screen name="name" component={Sidebar} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default SidebarTest;