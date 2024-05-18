import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';
import CourseListScreen from './screens/CourseListScreen';
import IonIcons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: true,
                    tabBarLabelPosition: 'below-icon',
                    tabBarActiveTintColor: 'purple',
                    tabBarInactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen
                    name="Course List"
                    component={CourseListScreen}
                    options={{
                        tabBarLabel: 'Courses',
                        tabBarIcon: ({ color }) => (
                            <IonIcons name={'list'} size={20} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'My Profile',
                        tabBarIcon: ({ color }) => (
                            <IonIcons name={'person'} size={20} color={color} />
                        ),
                        tabBarBadge: 3,
                    }}
                />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (
                            <IonIcons
                                name={'settings'}
                                size={20}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabNavigator;
