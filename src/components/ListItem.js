/**
 * Created by minhhung on 6/6/18.
 */
import React, {Component} from "react";
import {Text, TouchableWithoutFeedback, View, LayoutAnimation} from "react-native";
import {connect} from "react-redux";
import {CardSection} from "./common";
import * as actions from "../actions";

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const {library, expanded} = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={{flex: 1}}>
                        {library.description}
                    </Text>
                </CardSection>
            );
        }
    };

    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library;

        return (
            //call action creator when press on touchable
            <TouchableWithoutFeedback onPress={() => this.props.SelectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}

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

/**
 *
 * @param state
 * @param ownProps are the props that be passed to component wrapping by connect function,
 * or a.k.a this.props inside the component
 * @returns {{selectedLibraryId: *}}
 */
const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;

    return {expanded};
};

/*
 * The 2nd parameter of connect function is entire actions that are created by actionCreator (the actions imported)
 * The purpose is to pass the action to the Component as Props. Whenever the actionCreator called, it will dispatch
 * the redux Store.
 */
export default connect(mapStateToProps, actions)(ListItem);