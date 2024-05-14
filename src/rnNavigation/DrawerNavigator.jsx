import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{
                        title: 'My Dashboard',
                        drawerLabel: 'Dashboard',
                        drawerActiveTintColor: '#333',
                        drawerActiveBackgroundColor: 'lightblue',
                        drawerContentStyle: {
                            backgroundColor: '#c6cbef',
                        },
                    }}
                />
                <Drawer.Screen name="Settings" component={SettingsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigator;
