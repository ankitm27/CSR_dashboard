import { createAction } from "redux-actions";
import axios from 'axios';

const VERIFY_USER = createAction("VERIFY_USER");
const REGISTER_USER = createAction("REGISTER_USER");

const backend_URL = "http://13.232.210.179/";

export const verifyUser = values => dispatch => {
    return axios.post(
        backend_URL +  'api/admin/login/', {
            email: values.email,
            password: values.password
        }
    ).then((res) => {
        console.log(res.data);
        console.log(res.data.data.token);
        // if (localStorage.getItem("token") === null) {
        console.log("local storage",localStorage.getItem("token"));
        localStorage.setItem("token", res.data.data.token);
        dispatch(VERIFY_USER())
        // }
        // else {
        //     window.localStorage.removeItem('token');
        //     localStorage.setItem("token", res.data.token);
        //     // dispatch(VERIFY_EMAIL({ id: res.data.data._id }))
        //     dispatch(VERIFY_USER())
        // }
    })
        .catch(error => {
            document.getElementById("emailerror").innerHTML = error.response.data.error;
            return Promise.reject();
        });
}




export const registerUser = values => dispatch => {
    return axios.post(
        backend_URL + 'api/admin/register/', {
            firstName: values.firstname,
            lastName: values.lastname,
            email: values.email,
            mobile: values.mobile,
            password: values.password,
            organizationType: values.organizationType,
            confirmPassword: values.confirmPassword
        }
    ).then((res) => {
        console.log(res.data);
        // console.log(res.data.data._id);
        dispatch(REGISTER_USER({success:true}))
    }).catch(error => {
            document.getElementById("emailerror").innerHTML = error.response.data.error;
            return Promise.reject();
        });
}

