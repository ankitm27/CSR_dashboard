import { handleActions } from "redux-actions";

const INITIAL_STATE = {
    zxc: "asds",
    mailSent: false
}

const ProjectReducers = handleActions({
    DASHBOARD_DATA: (state, action) => {
        // console.log("state",state);
        // console.log("action",action);
        return { ...state, mailSent: true, ...action.payload };
    },
}, INITIAL_STATE);

export default ProjectReducers;