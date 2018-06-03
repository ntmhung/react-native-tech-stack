/**
 * Created by minhhung on 6/3/18.
 */
import React from "react";
import {View} from "react-native";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./reducers";
import {Header} from "./components/common";
import LibraryList from "./components/LibraryList";

const App = () => {
    return (
        //can contain only ONE child
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText="Tech Stack"/>
                <LibraryList />
            </View>
        </Provider>
    );
};

export default App;