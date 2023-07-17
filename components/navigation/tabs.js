import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../../app/trainner-dashboard';
import {TrainerProfile} from '../../app/trainer-profile/index';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name= "Home" component={Home}/>
            <Tab.Screen name= "TrainerProfile" component={TrainerProfile}/>
            {/* <Tab.Screen name= "" component={Chat}/> */}
        </Tab.Navigator>
    )
}

export default Tabs;