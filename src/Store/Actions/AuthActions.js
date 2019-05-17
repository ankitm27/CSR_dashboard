import { createAction } from "redux-actions";
import axios from 'axios';
import { BACKEND_URL } from "../../config.js";

const VERIFY_USER = createAction("VERIFY_USER");
const REGISTER_USER = createAction("REGISTER_USER");


export const verifyUser = values => dispatch => {
    return axios.post(
        BACKEND_URL +  'api/admin/login/', {
            email: values.email,
            password: values.password
        }
    ).then((res) => {
        localStorage.setItem("token", res.data.data.token);
        dispatch(VERIFY_USER(res.data.data))
    }).catch(error => {
            document.getElementById("emailerror").innerHTML = error.response.data.error;
            return Promise.reject();
    });
}




export const registerUser = values => dispatch => {
    return axios.post(
        BACKEND_URL + 'api/admin/register/', {
            firstName: values.firstname,
            lastName: values.lastname,
            email: values.email,
            mobile: values.mobile,
            password: values.password,
            organizationType: values.organizationType,
            confirmPassword: values.confirmPassword
        }
    ).then((res) => {
        dispatch(REGISTER_USER({success:true}))
    }).catch(error => {
            document.getElementById("emailerror").innerHTML = error.response.data.error;
            return Promise.reject();
        });
}

