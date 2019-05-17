import { createAction } from "redux-actions";
import axios from 'axios';
import { BACKEND_URL } from "../../config.js";

const DASHBOARD_DATA = createAction("DASHBOARD_DATA");
const PROJECT_DETAIL = createAction("PROJECT_DETAIL");
const CREATE_PROJECT = createAction("CREATE_PROJECT");
const SAVE_QUESTION = createAction("SAVE_QUESTION");
const GET_QUESTIONS_TYPE = createAction("GET_QUESTIONS_TYPE");

export const dashboardData = values => dispatch => {
    return axios.get(
        BACKEND_URL +  'api/dashboard/', {
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
    ).then((res) => {
        dispatch(DASHBOARD_DATA(res.data.data));
    }).catch(error => {
        return Promise.reject();
    });
}

export const projectDetails = values => dispatch => {
    return axios.get(
        BACKEND_URL +  'api/program/' + values._id, {
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
    ).then((res) => {
        dispatch(PROJECT_DETAIL(res.data.data));
    }).catch(error => {
        return Promise.reject();
    });
}

export const createProject = values => dispatch => {
    return axios.post(
        BACKEND_URL +  'api/program/', values,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
    ).then((res) => {
        dispatch(CREATE_PROJECT(res.data.data));
    }).catch(error => {
        return Promise.reject();
    });
}


export const saveQuestion = values => dispatch => {
    return axios.post(
        BACKEND_URL + 'api/program/' + values._id + "/question", [values.data],{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
    ).then((res) => {
        dispatch(SAVE_QUESTION({success:true}));
    }).catch(error => {
        return Promise.reject();
    })
}

export const createVolunteerUser = values => dispatch => {
    return axios.post(
        BACKEND_URL + 'api/volunteer/register/', {
            firstName: "check",
            lastName: "check",
            email: new Date().getTime() + "@gmail.com",
            mobile: values.phone,
            password: "123",
            organizationType: "goverment",
            confirmPassword: "123"
        }
    ).then((res) => {
        // dispatch(DASHBOARD_DATA(res.data.data));
    }).catch(error => {
        return Promise.reject();
    });
}

export const getQuestionsTypes = values => dispatch => {
    return axios.get(
        BACKEND_URL +  'api/question',{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
    ).then((res) => {
        dispatch(GET_QUESTIONS_TYPE(res.data.data));
    }).catch(error => {
        return Promise.reject();
    });
}






