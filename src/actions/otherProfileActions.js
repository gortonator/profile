import axios from "axios";
import {FETCH_OTHER_PROFILE_DATA} from '../actions/types'
import {HOST, API_GET_OTHER_PROFILE} from "./apis";


export function fetchOtherProfile(login) {
    return (dispatch, getState) => {
        let myToken = getState().myProfileReducer.LoginInfo.token;
        axios.get(
            (HOST + API_GET_OTHER_PROFILE).format(login.id),
            {headers: {
                "Content-Type": "application/json",
                "token" : login.token
            }})
            .then(
                (response) => {
                    console.log("yudong other action", response.data);
                    dispatch({type: FETCH_OTHER_PROFILE_DATA, payload: response.data});
                    login.history.push("/otherProfile");
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }
}