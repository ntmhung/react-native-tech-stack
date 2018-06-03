/**
 * Created by minhhung on 6/3/18.
 */
import {combineReducers} from "redux";
import LibraryReducer from './LibraryReducer';

export default combineReducers({
    libraries: LibraryReducer
});