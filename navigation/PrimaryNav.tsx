import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "../screens/Home";

export const PrimaryNav = createStackNavigator(
    {
        Home: HomeScreen
    },
    {
        defaultNavigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
        },
        navigationOptions: {
            tabBarLabel: 'Home!',
        },
    }
);
