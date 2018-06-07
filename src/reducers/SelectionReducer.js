/**
 * Created by minhhung on 6/6/18.
 */

//initial state have null value
export default (state = null, action) => {
    switch (action.type) {
        case "select_library":
            return action.payload;
        default:
            //Return the state last time redux ran
            return state;
    }
}