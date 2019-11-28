import React, {Component} from 'react';

import HomeScreen from './screens/Home';
import {createAppContainer} from "react-navigation";
import {PrimaryNav} from "./navigation/PrimaryNav";

const AppContainer = createAppContainer(PrimaryNav);

export default class App extends Component {
    render() {
        return <AppContainer>

        </AppContainer>
    }
};

