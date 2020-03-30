import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

let rootReducer = combineReducers(
    {
        profilePage : profileReducer,
        dialogsPage : dialogsReducer,
        sidebar : sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
    }
)
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;