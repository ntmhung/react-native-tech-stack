/**
 * Created by minhhung on 6/3/18.
 */
import {combineReducers} from "redux";
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer,
});