import React, {Component} from 'react';

import HomeScreen from './screens/Home';
import {createAppContainer} from "react-navigation";
import {PrimaryNav} from "./navigation/PrimaryNav";

const AppContainer = createAppContainer(PrimaryNav);

export default class App extends Component {
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return <AppContainer>

        </AppContainer>
    }
};

