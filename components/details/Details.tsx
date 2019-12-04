import React, {Component} from "react";
import {Image, ScrollView, Text, View, StyleSheet, PixelRatio, Dimensions} from "react-native";

type DetailsProps = {
    title: string
    description:  string
    image: string,
    status: string
}

export default class AppDetails extends Component {
    public title: string;
    public description: string;
    public image: string;
    public status: string;

    constructor(props) {
        super(props);
        this.title = this.props.title;
        this.description = this.props.description;
        this.image = this.props.image;
        this.status = this.props.status;
    }

    render() {
        return (
            <ScrollView>
                <View style={style.imageContainer}>
                    <Image source={this.props.image} style={style.image}>

                    </Image>
                    <Text style={style.title}>
                        {this.props.title}
                    </Text>
                    <Text style={style.text}>
                        {this.props.status}
                    </Text>
                    <Text style={style.text}>
                        {this.props.description}
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const style = {
    container: {
        width: Dimensions.get('window').width,
    },
    imageContainer: {
        flex: 1,
        alignContent: 'center'
    },
    image: {
        marginTop: PixelRatio.getPixelSizeForLayoutSize(10),
        marginBottom: PixelRatio.getPixelSizeForLayoutSize(10),
        alignSelf: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        justifyContent: 'center',
        textAlign: 'center'

    },
    text: {
        margin: PixelRatio.getPixelSizeForLayoutSize(10)
    }
}
