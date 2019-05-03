import { createAction } from "redux-actions";
import axios from 'axios';

const VERIFY_USER = createAction("VERIFY_USER");


export const verifyUser = values => dispatch => {
    return axios.post(
        'http://13.232.210.179/api/admin/login/', {
            email: values.email,
            password: values.password
        }
    ).then((res) => {
        console.log(res.data);
        console.log(res.data.data._id);
        if (localStorage.getItem("token") === null) {
            localStorage.setItem("token", res.data.token);
            dispatch(VERIFY_USER())
        }
        else {
            window.localStorage.removeItem('token');
            localStorage.setItem("token", res.data.token);
            // dispatch(VERIFY_EMAIL({ id: res.data.data._id }))
            dispatch(VERIFY_USER())
        }

    })
        .catch(error => {
            document.getElementById("emailerror").innerHTML = error.response.data.error;
            return Promise.reject();
        });
}
