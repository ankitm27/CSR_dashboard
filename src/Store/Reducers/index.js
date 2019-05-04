import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ProjectReducers from "./ProjectsReducers";


export default combineReducers({
    auth: AuthReducer,
    Projects: ProjectReducers
})