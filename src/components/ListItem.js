/**
 * Created by minhhung on 6/6/18.
 */
import React, {Component} from "react";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import {connect} from "react-redux";
import {CardSection} from "./common";
import * as actions from "../actions";

class ListItem extends Component {
    componentWillMount() {

    }

    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.SelectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,

    }
};

/*
 * The 2nd parameter of connect function is entire actions that are created by actionCreator (the actions imported)
 * The purpose is to pass the action to the Component as Props. Whenever the actionCreator called, it will dispatch
 * the redux Store.
 */
export default connect(null, actions)(ListItem);