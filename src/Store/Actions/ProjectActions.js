import { createAction } from "redux-actions";
import axios from 'axios';

const DASHBOARD_DATA = createAction("DASHBOARD_DATA");
const PROJECT_DETAIL = createAction("PROJECT_DETAIL");
const CREATE_PROJECT = createAction("CREATE_PROJECT");

const backend_URL = "http://13.232.210.179/";

export const dashboardData = values => dispatch => {
    return axios.get(
        backend_URL +  'api/dashboard/', {
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
    let values = {
        _id:"5cd1cf5ce292e15fff263bdf",
    }
    return axios.get(
        backend_URL +  'api/program/' + values._id, {
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
    let data = Object.assign(values.step1,values.step2,values.step3,values.step4);
    return axios.post(
        backend_URL +  'api/program/', data,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
    ).then((res) => {
        dispatch(CREATE_PROJECT({success:true}));
    }).catch(error => {
        return Promise.reject();
    });
}





