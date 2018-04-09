import axios from "axios";
import {FETCH_MY_PROFILE_DATA, FETCH_OTHER_PROFILE_DATA, SET_SUMMARY, UPDATE_PRIVACY,
    UPDATE_SKILL, UPDATE_ABOUT, UPDATE_EXTRA_EXPERIENCE, ADD_EXTRA_EXPERIENCE, DELETE_EXTRA_EXPERIENCE,
    UPDATE_PROJECT, ADD_PROJECT, DELETE_PROJECT} from '../actions/types'
import {initialState} from '../reducers/myProfileReducer'

const myToken = "eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..yKhmEVH4mQHckfwheQKPdQ.cwGL9uMrsv3JuLoMF9Iqgw66ofYtCyLhuYT1vc4YCG3cLD_U9jq34G7_9jJc_X8Gi5bpOTToC_4d-x_MHCfUDuVn09RKSj_L9ZfpO3d9mao.ATdu6jXd3IZ9Xbm0tHXOrQ"
export function setSummary(summary) {
    return {
        type: SET_SUMMARY,
        payload: summary,
    }
}

export function fetchMyProfile() {
    return (dispatch) => {
        console.log("yudong action");
        axios.get("http://rest.learncode.academy/api/reacttest/tweets")
            .then((response) => {
                console.log("FETCH_MY_PROFILE_SUCCEED", response);
                dispatch({type: FETCH_MY_PROFILE_DATA, payload: {...initialState, skills:"Java\nPython\nC++\nRuby"}});
            })
    }
}

export function fetchOtherProfile() {
    return (dispatch) => {
        console.log("yudong action");
        axios.get("http://rest.learncode.academy/api/reacttest/tweets")
            .then((response) => {
                console.log("FETCH_OTHER_PROFILE_SUCCEED", response);
                dispatch({type: FETCH_OTHER_PROFILE_DATA, payload: {...initialState, intro:{...initialState.intro, firstname:"Yang", lastname:"Li"}}});
            })
    }
}



export function updatePrivacy(privacy) {
    let data = JSON.stringify(privacy);
    let neuid = initialState.StudentRecord.neuId;
    return (dispatch) => {
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
    let data = JSON.stringify({...initialState.StudentRecord, skills: skills});
    let neuid = initialState.StudentRecord.neuId;
    return (dispatch) => {
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
    let data = JSON.stringify(about);
    let neuid = initialState.StudentRecord.neuId;
    return (dispatch) => {
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
    return (dispatch) => {
        axios.get("http://rest.learncode.academy/api/reacttest/tweets") // mock request should be PUT
            .then((response) => {
                dispatch({type: UPDATE_EXTRA_EXPERIENCE, payload: experience});
            })
    }
}

export function addExtraExperience(experience) {
    let data = JSON.stringify(experience);
    let neuid = initialState.StudentRecord.neuId;
    return (dispatch) => {
        axios.post(
            "http://asd2.ccs.neu.edu:8082/students/" + neuid +"/extraexperiences",
            data,
            {headers: {
                    "Content-Type": "application/json",
                    "token" : myToken
                }})
            .then(
                (response) => {
                    let new_experience = {...experience, extraExperienceId: response.data};
                    dispatch({type: ADD_EXTRA_EXPERIENCE, payload: new_experience});
                    console.log("Send request successfully.");
                },
                (error) => {
                    alert("Server error!");
                    console.log(error);
                })
    }
}

export function deleteExtraExperience(experience) {
    let neuid = initialState.StudentRecord.neuId;
    return (dispatch) => {
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
    return (dispatch) => {
        axios.get("http://rest.learncode.academy/api/reacttest/tweets") // mock request should be PUT
            .then((response) => {
                dispatch({type: UPDATE_PROJECT, payload: project});
            })
    }
}

export function addProject(project) {
    return (dispatch) => {
        axios.get("http://rest.learncode.academy/api/reacttest/tweets") // mock request should be POST
            .then((response) => {
                dispatch({type: ADD_PROJECT, payload: project});
            })
    }
}

export function deleteProject(project) {
    return (dispatch) => {
        axios.get("http://rest.learncode.academy/api/reacttest/tweets") // mock request should be POST
            .then((response) => {
                dispatch({type: DELETE_PROJECT, payload: project});
            })
    }
}

