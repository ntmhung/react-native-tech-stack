/**
 * Created by minhhung on 6/3/18.
 */
import React, {Component} from "react";
import {connect} from 'react-redux';


class LibraryList extends Component {

    render() {
        return ;
    }

}

mapStateToProps = state => {
    return {
        libraries: state.libraries
    }
};

export default connect(mapStateToProps)(LibraryList);