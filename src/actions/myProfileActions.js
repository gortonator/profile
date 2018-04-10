import axios from "axios";
import {FETCH_MY_PROFILE_DATA, FETCH_OTHER_PROFILE_DATA, UPDATE_PRIVACY,
    UPDATE_SKILL, UPDATE_ABOUT, UPDATE_EXTRA_EXPERIENCE, ADD_EXTRA_EXPERIENCE, DELETE_EXTRA_EXPERIENCE,
    UPDATE_PROJECT, ADD_PROJECT, DELETE_PROJECT, UPDATE_SUMMARY,SET_LOGIN_INFO, DO_LOGIN, CLEAR_LOGIN} from '../actions/types'

const ROOT_URL = 'http://asd2.ccs.neu.edu:8082';

export function fetchMyProfile(LoginInfo) {

    return (dispatch, getState) => {
        let neuid = getState().myProfileReducer.LoginInfo.id;
        let myToken = getState().myProfileReducer.LoginInfo.token;
        console.log("yudong fetch my profile", LoginInfo);
        axios.get(
            "http://asd2.ccs.neu.edu:8082/students/" + neuid,
            {headers: {
                    "Content-Type": "application/json",
                    "token" : myToken
                }})
            .then(
                (response) => {
                    console.log("FETCH_MY_PROFILE_SUCCEED", response);
                    dispatch({type: FETCH_MY_PROFILE_DATA, payload: response.data});
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }
}

export function fetchOtherProfile() {
    let other_neuid = "010"; // should be obtained by searching result
    return (dispatch, getState) => {
        let myToken = getState().myProfileReducer.LoginInfo.token;
        axios.get(
            "http://asd2.ccs.neu.edu:8082/students/" + other_neuid,
            {headers: {
                    "Content-Type": "application/json",
                    "token" : myToken
                }})
            .then(
                (response) => {
                    // console.log("FETCH_MY_PROFILE_SUCCEED", response);
                    dispatch({type: FETCH_OTHER_PROFILE_DATA, payload: response.data});
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }
}

export function updateSummary(summary) {
    return (dispatch, getState) => {
        let state = getState().myProfileReducer;
        let neuid = state.StudentRecord.neuId;
        let myToken = getState().myProfileReducer.LoginInfo.token;
        let data = JSON.stringify({...state.StudentRecord, summary: summary});
        axios.put(
            "http://asd2.ccs.neu.edu:8082/students/" + neuid,
            data,
            {headers: {
                    "Content-Type": "application/json",
                    "token" : myToken
                }})
            .then(
                (response) => {
                    dispatch({type: UPDATE_SUMMARY, payload: summary});
                    console.log("Send request successfully.");
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }
}

export function updatePrivacy(privacy) {
    return (dispatch, getState) => {
        let state = getState().myProfileReducer;
        let neuid = state.StudentRecord.neuId;
        let myToken = getState().myProfileReducer.LoginInfo.token;
        let data = JSON.stringify(privacy);
        axios.put(
            "http://asd2.ccs.neu.edu:8082/students/" + neuid + "/privacies",
            data,
            {headers: {
                "Content-Type": "application/json",
                "token" : myToken
            }})
            .then(
                (response) => {
                    dispatch({type: UPDATE_PRIVACY, payload: privacy});
                    console.log("Send request successfully.");
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }
}

export function updateSkill(skills) {
    return (dispatch, getState) => {
        let state = getState().myProfileReducer;
        let neuid = state.StudentRecord.neuId;
        let myToken = getState().myProfileReducer.LoginInfo.token;
        let data = JSON.stringify({...state.StudentRecord, skills: skills});
        axios.put(
            "http://asd2.ccs.neu.edu:8082/students/" + neuid,
            data,
            {headers: {
                    "Content-Type": "application/json",
                    "token" : myToken
                }})
            .then(
                (response) => {
                    dispatch({type: UPDATE_SKILL, payload: skills});
                    console.log("Send request successfully.");
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }
}

export function updateAbout(about) {
    return (dispatch,getState) => {
        let state = getState().myProfileReducer;
        let neuid = state.StudentRecord.neuId;
        let myToken = getState().myProfileReducer.LoginInfo.token;
        let data = JSON.stringify(about);
        axios.put(
            "http://asd2.ccs.neu.edu:8082/students/" + neuid,
            data,
            {headers: {
                    "Content-Type": "application/json",
                    "token" : myToken
                }})
            .then(
                (response) => {
                    dispatch({type: UPDATE_ABOUT, payload: about});
                    console.log("Send request successfully.");
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }

}

export function updateExtraExperience(experience) {
    return (dispatch, getState) => {
        let neuid = getState().myProfileReducer.StudentRecord.neuId;
        let myToken = getState().myProfileReducer.LoginInfo.token;
        let data = JSON.stringify(experience);
        axios.put(
            "http://asd2.ccs.neu.edu:8082/students/" + neuid +"/extraexperiences/" + experience.extraExperienceId,
            data,
            {headers: {
                    "Content-Type": "application/json",
                    "token" : myToken
                }})
            .then(
                (response) => {
                    dispatch({type: UPDATE_EXTRA_EXPERIENCE, payload: experience});
                    console.log("Send request successfully.");
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }
}

export function addExtraExperience(experience) {
    return (dispatch, getState) => {
        let neuid = getState().myProfileReducer.StudentRecord.neuId;
        let myToken = getState().myProfileReducer.LoginInfo.token;
        let data = JSON.stringify(experience);
        axios.post(
            "http://asd2.ccs.neu.edu:8082/students/" + neuid +"/extraexperiences",
            data,
            {headers: {
                    "Content-Type": "application/json",
                    "token" : myToken
                }})
            .then(
                (response) => {
                    experience = {...experience, extraExperienceId: response.data};
                    dispatch({type: ADD_EXTRA_EXPERIENCE, payload: experience});
                    console.log("Send request successfully.");
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }
}

export function deleteExtraExperience(experience) {
    return (dispatch, getState) => {
        let neuid = getState().myProfileReducer.StudentRecord.neuId;
        let myToken = getState().myProfileReducer.LoginInfo.token;
        axios.delete(
            "http://asd2.ccs.neu.edu:8082/students/" + neuid +"/extraexperiences/" + experience.extraExperienceId,
            {headers: {
                    "Content-Type": "application/json",
                    "token" : myToken
                }})
            .then(
                (response) => {
                    dispatch({type: DELETE_EXTRA_EXPERIENCE, payload: experience});
                    console.log("Send request successfully.");
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }
}

export function updateProject(project) {
    return (dispatch, getState) => {
        let neuid = getState().myProfileReducer.StudentRecord.neuId;
        let myToken = getState().myProfileReducer.LoginInfo.token;
        let data = JSON.stringify(project);
        axios.put(
            "http://asd2.ccs.neu.edu:8082/students/" + neuid +"/projects/" + project.projectId,
            data,
            {headers: {
                    "Content-Type": "application/json",
                    "token" : myToken
                }})
            .then(
                (response) => {
                    dispatch({type: UPDATE_PROJECT, payload: project});
                    console.log("Send request successfully.");
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }
}

export function addProject(project) {
    return (dispatch, getState) => {
        let neuid = getState().myProfileReducer.StudentRecord.neuId;
        let myToken = getState().myProfileReducer.LoginInfo.token;
        let data = JSON.stringify(project);
        axios.post(
            "http://asd2.ccs.neu.edu:8082/students/" + neuid +"/projects",
            data,
            {headers: {
                    "Content-Type": "application/json",
                    "token" : myToken
                }})
            .then(
                (response) => {
                    project = {...project, projectId: response.data};
                    dispatch({type: ADD_PROJECT, payload: project});
                    console.log("Send request successfully.");
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }
}

export function deleteProject(project) {
    return (dispatch, getState) => {
        let neuid = getState().myProfileReducer.StudentRecord.neuId;
        let myToken = getState().myProfileReducer.LoginInfo.token;
        axios.delete(
            "http://asd2.ccs.neu.edu:8082/students/" + neuid +"/projects/" + project.projectId,
            {headers: {
                    "Content-Type": "application/json",
                    "token" : myToken
                }})
            .then(
                (response) => {
                    dispatch({type: DELETE_PROJECT, payload: project});
                    console.log("Send request successfully.");
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }
}

export function doLogin(body) {
    return (dispatch) => {
        let logInfo = JSON.stringify({
            username : "studentfetwo@husky.neu.edu",
            password : "password"
        });
        let newLogInfo = JSON.stringify(body);

        console.log("yudong login", newLogInfo, logInfo);

        axios.post(
            "http://asd2.ccs.neu.edu:8082/login",
            newLogInfo,
            {headers: {
                    "Content-Type": "application/json",
                }})
            .then(
                (response) => {
                    console.log("yudong login", response);

                    dispatch({type: SET_LOGIN_INFO, payload: response.data}); // For temporary use
                    // dispatch({type: SET_LOGIN_INFO, payload: response.data}); // uncomment if server-side fixes the issues
                    alert("Login successfully");
                    console.log("Login successfully.");
                    dispatch(fetchMyProfile(response.data)); // Async request
                },
                (error) => {
                    alert("Login failed. Server error!");
                    console.log(error);
                })
    }
}


// export function doLogin(body){
//     const request = axios.post(`${ROOT_URL}/login`,body,{headers:{"Content-Type":"application/json"}});
//     return {
//         type: DO_LOGIN,
//         payload:request
//     }
// }

export function clearLogin(){
    return {
        type:CLEAR_LOGIN,
        payload: null
    }
}