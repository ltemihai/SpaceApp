
import React from "react";
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet } from "react-native";

import HomeScreen from "../screens/Home";
import {Colors} from "react-native/Libraries/NewAppScreen";
import DetailsPage from "../screens/Details";

export const navStyle = StyleSheet.create({
        nav: {
            color: Colors.red
        }
    }
);

export const PrimaryNav = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsPage
    },
    {
        initialRouteName: 'Home'
    },
);


