import React, {Component, Fragment} from "react";
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, View} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import AppList from "../components/list/List";
import {Planet} from "../models/Planet";

export default class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home',
        /* No more header config here! */
    };

    render() {
        return (
            <Fragment>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <View>
                            <AppList entries={entities} navigation={this.props.navigation}>

                            </AppList>
                        </View>
                        <View style={styles.body}>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        )
    }
}




const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

const entities: Planet[] = [
    {
        id: 1,
        title: 'Wooohoh',
        uri: require('./../assets/earth.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum faucibus hendrerit. Aenean finibus, nisl ut tempor pretium, lorem velit consequat arcu, id finibus odio orci sed dolor. Fusce bibendum ornare lorem, ut consequat nisi egestas ut. Praesent pretium felis ante, nec suscipit nisi vehicula non.'
    },{
        id: 2,
        title: 'Woooooohoh',
        uri: require('./../assets/earth.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum faucibus hendrerit. Aenean finibus, nisl ut tempor pretium, lorem velit consequat arcu, id finibus odio orci sed dolor. Fusce bibendum ornare lorem, ut consequat nisi egestas ut. Praesent pretium felis ante, nec suscipit nisi vehicula non.'
    },{
        id: 3,
        title: 'Woooooohoh',
        uri: require('./../assets/earth.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum faucibus hendrerit. Aenean finibus, nisl ut tempor pretium, lorem velit consequat arcu, id finibus odio orci sed dolor. Fusce bibendum ornare lorem, ut consequat nisi egestas ut. Praesent pretium felis ante, nec suscipit nisi vehicula non.'
    },{
        id: 4,
        title: 'Woooooohoh',
        uri: require('./../assets/earth.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum faucibus hendrerit. Aenean finibus, nisl ut tempor pretium, lorem velit consequat arcu, id finibus odio orci sed dolor. Fusce bibendum ornare lorem, ut consequat nisi egestas ut. Praesent pretium felis ante, nec suscipit nisi vehicula non.'
    },{
        id: 5,
        title: 'Woooooohoh',
        uri: require('./../assets/earth.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum faucibus hendrerit. Aenean finibus, nisl ut tempor pretium, lorem velit consequat arcu, id finibus odio orci sed dolor. Fusce bibendum ornare lorem, ut consequat nisi egestas ut. Praesent pretium felis ante, nec suscipit nisi vehicula non.'
    },{
        id: 6,
        title: 'Woooooohoh',
        uri: require('./../assets/earth.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum faucibus hendrerit. Aenean finibus, nisl ut tempor pretium, lorem velit consequat arcu, id finibus odio orci sed dolor. Fusce bibendum ornare lorem, ut consequat nisi egestas ut. Praesent pretium felis ante, nec suscipit nisi vehicula non.'
    },{
        id: 7,
        title: 'Woooooohoh',
        uri: require('./../assets/earth.png'),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum faucibus hendrerit. Aenean finibus, nisl ut tempor pretium, lorem velit consequat arcu, id finibus odio orci sed dolor. Fusce bibendum ornare lorem, ut consequat nisi egestas ut. Praesent pretium felis ante, nec suscipit nisi vehicula non.'
    }
]
