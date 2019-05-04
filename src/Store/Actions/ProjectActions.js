import { createAction } from "redux-actions";
import axios from 'axios';

const PROJECTS = createAction("PROJECTS");

const backend_URL = "http://10.5.51.195:3000/";

export const dashboardData = values => dispatch => {
    
    return axios.post(
        backend_URL +  'api/dashboard/', {},{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }
    ).then((res) => {
        console.log(res.data);
        
    }).catch(error => {
        document.getElementById("emailerror").innerHTML = error.response.data.error;
        return Promise.reject();
    });
}


