import * as React from 'react';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import Home from '../../app/TrainerDashboard';
import TrainerProfile from '../../app/TrainerProfile'

const Tab = createMaterialBottomTabNavigator();

export default function MyTab(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    );
}
