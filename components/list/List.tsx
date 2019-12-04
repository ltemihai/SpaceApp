import React, { Component } from "react";
import { View, Navigator, Text } from "react-native";

import ListEntry from "./ListEntry";

type ListProps = {
    entries: any,
    navigation: any
};

export default class AppList extends Component<ListProps> {

    public entries = [];
    public navigation: any;

    constructor(props) {
        super(props);
        this.entries = this.props.entries;
        this.navigation = this.props.navigation;
    }
    
    render() {
        return (
            <View style={styles.container} >
                {this.entries.map(entry => {
                 return <ListEntry title={entry.title} uri={entry.uri} description={entry.description} navigation={this.navigation}>

                 </ListEntry>
                })}
            </View>   
        ) 
    }
}

const styles = {
    container: {
        flex: 1
    }
}
