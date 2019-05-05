import { createAction } from "redux-actions";
import axios from 'axios';

const DASHBOARD_DATA = createAction("DASHBOARD_DATA");
const PROJECT_DETAIL = createAction("PROJECT_DETAIL");

const backend_URL = "http://13.232.210.179/";

export const dashboardData = values => dispatch => {
    console.log("check");
    return axios.get(
        backend_URL +  'api/dashboard/', {
            headers:{
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoZWNrQGdtYWlsLmNvbSIsImlhdCI6MTU1NzA0NTg0MiwiZXhwIjoxNTg4NTgxODQyfQ.5UVoOQA40KoffyomiPp9W__DB2CowvvG2FDPsl-mwzU"
            }
        }
    ).then((res) => {
        // console.log("data",res.data);
        dispatch(DASHBOARD_DATA(res.data.data));
    }).catch(error => {
        // document.getElementById("emailerror").innerHTML = error.response.data.error;
        return Promise.reject();
    });
}

export const projectDetails = values => dispatch => {
    console.log("check");
    return axios.get(
        backend_URL +  'api/program/5ccdd114467fe42328a4ac20/', {
            headers:{
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoZWNrQGdtYWlsLmNvbSIsImlhdCI6MTU1NzAzODI2MywiZXhwIjoxNTU3MTI0NjYzfQ.pLSqhXneCZxtaAt0dQl5zLsSxOqtrOoGx2QJumFtN0s"
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




