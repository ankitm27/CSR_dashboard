import { createAction } from "redux-actions";
import axios from 'axios';

const DASHBOARD_DATA = createAction("DASHBOARD_DATA");

const backend_URL = "http://13.232.210.179/";

export const dashboardData = values => dispatch => {
    console.log("check");
    return axios.get(
        backend_URL +  'api/dashboard/', {
            headers:{
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFua2l0Lm1hbGhvdHJhQGdtYWlsLmNvbSIsImlhdCI6MTU1Njk0ODc3MSwiZXhwIjoxNTU3MDM1MTcxfQ.g-Ux84QuCZ7QAVeYRfMtdK2Q4RjyqMyb68PQsGyfCSU"
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


