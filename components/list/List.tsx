import React, { Component } from "react";
import { View, Navigator, Text } from "react-native";

import ListEntry from "./ListEntry";

type ListProps = {
    entries: any,
};

export default class AppList extends Component<ListProps> {

    public entries = [];

    constructor(props) {
        super(props);
        this.entries = this.props.entries;
    }
    
    render() {
        return (
            <View style={styles.container}>
                {this.entries.map(entry => {
                 return <ListEntry title={entry.title} uri={entry.uri} description={entry.description}>

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