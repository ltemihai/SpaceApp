import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "../screens/Home";

export const PrimaryNav = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
});
