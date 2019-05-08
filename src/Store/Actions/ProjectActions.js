import { createAction } from "redux-actions";
import axios from 'axios';

const DASHBOARD_DATA = createAction("DASHBOARD_DATA");
const PROJECT_DETAIL = createAction("PROJECT_DETAIL");

const backend_URL = "http://13.232.210.179/";

export const dashboardData = values => dispatch => {
    console.log("local storage",localStorage);
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
    console.log("check");
    // console.log("values",values);
    let values = {
        _id:"5cd1cf5ce292e15fff263bdf",
    }
    console.log("values",values);
    return axios.get(
        backend_URL +  'api/program/' + values._id, {
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
    ).then((res) => {
        // console.log("data",res.data);
        dispatch(PROJECT_DETAIL(res.data.data));
    }).catch(error => {
        // document.getElementById("emailerror").innerHTML = error.response.data.error;
        return Promise.reject();
    });
}




