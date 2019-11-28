import {Component} from "react";
import {StatusBar, View, ViewComponent} from "react-native";
import * as React from "react";

type HeaderProps = {
    title: string
    color: string
    barStyle: string
}

export default class Header extends Component<HeaderProps> {

    public title: string;
    public color: string;
    public barStyle: string;

    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.color = this.props.color;
        this.barStyle = this.props.barStyle;
    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor={this.props.color} barStyle={this.props.barStyle} style={style.statusBar}>
                    {this.props.title}
                </StatusBar>
            </View>
        )
    }

}

const style = {
    statusBar: {
        height: 100,
        color: 'blue'
    }
};