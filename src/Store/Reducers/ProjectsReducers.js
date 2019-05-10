import { handleActions } from "redux-actions";

const INITIAL_STATE = {
    zxc: "asds",
    mailSent: false
}

const ProjectReducers = handleActions({
    DASHBOARD_DATA: (state, action) => {
        return { ...state, mailSent: true, ...action.payload };
    },

    PROJECT_DETAIL: (state, action) => {
        return { state:state, mailSent: true, ...action.payload };
    },

    CREATE_PROJECT: (state, action) => {
        // console.log("action",action);
        return { ...state, mailSent: true, ...action.payload };
    },


}, INITIAL_STATE);

export default ProjectReducers;