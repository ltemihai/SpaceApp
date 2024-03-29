import React, { Component } from "react"
import {Image, View, Text, PixelRatio, Button, Dimensions, TouchableOpacity} from "react-native"
import {Planet} from "../../models/Planet";

type ListEntryProps = {
    description: string;
    title: string;
    uri: string;
    navigation: any;
}

export default class ListEntry extends Component<ListEntryProps> {

    public description: string;
    public title: string;
    public uri: string;
    public navigation: any;

    constructor(props) {
        super(props);
        this.description = this.props.description;
        this.title = this.props.title;
        this.uri = this.props.uri;
        this.navigation = this.props.navigation;
    }

    render() {
        return (
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Details', {
                    title: this.title,
                    description: this.description,
                    uri: this.uri
                });
            }}>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Image source={this.props.uri}  style={styles.image}>

                        </Image>
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.title}>Name: {this.props.title}</Text>
                        <Text >Description: {this.props.description}</Text>
                    </View>
                    <View style={styles.button}>
                        <Button title={'Status'} onPress={this.buttonPress.bind(this.props.description)}>

                        </Button>
                    </View>
                </View>
            </TouchableOpacity>
        )    
    }

    buttonPress(title: string) {
        alert(title)
    }



} 

 
const styles = {
    container: {
        width: Dimensions.get('window').width, 
        flex: 1,
        margin: PixelRatio.getPixelSizeForLayoutSize(2),
        flexDirection: 'row' 
    },
    imageContainer: {
        justifyContent: 'center'
    },
    image: {
        width: 64, 
        height: 64,
        margin: PixelRatio.getPixelSizeForLayoutSize(5)   
    },
    title: {
        fontWeight: 'bold'
    },
    description: {
        wordWrap: 'break-word'
    },  
    text: {
        flex: 2
    },
    button: {
        flex: 1,
        justifyContent: 'center'
    }
}
