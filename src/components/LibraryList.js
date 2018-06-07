/**
 * Created by minhhung on 6/3/18.
 */
import React, {Component} from "react";
import {ListView} from "react-native";
import {connect} from "react-redux";
import ListItem from "./ListItem";

class LibraryList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library) {
        return <ListItem library={library} />;
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }

}

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    }
};

/*
 * Connect function has 2 parameters. The 1st parameter is a required parameter,
 * and MUST be mapStateToProps function.
 * If there is no mapStateToProps function, the 1st should be pass as 'null'.
 * The connect() helper modify the data show in Component as Props.
 */
export default connect(mapStateToProps)(LibraryList);