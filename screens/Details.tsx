import React, {Component, Fragment} from "react";
import {SafeAreaView} from "react-native";
import AppDetails from "../components/details/Details";

type DetailsProps = {
    title: string
    description:  string
    uri: string,
    status: string
}

export default class DetailsPage extends Component<DetailsProps> {

    public title: string;
    public description: string;
    public uri: string;
    public status: string;

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        this.title=JSON.stringify(navigation.getParam('title', ''));
        this.description=JSON.stringify(navigation.getParam('description', ''));
        this.uri=JSON.stringify(navigation.getParam('uri', ''));
        this.status=JSON.stringify(navigation.getParam('status', ''));
    }

    render() {
        return (
            <Fragment>

            <SafeAreaView style={{display: 'flex'}}>
                <AppDetails title={this.title}
                            description={this.description}
                            image={this.uri}
                            status={this.status}>
                </AppDetails>
            </SafeAreaView>
            </Fragment>
        );
    }
}
