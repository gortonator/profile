import axios from "axios";
import {FETCH_MY_PROFILE_DATA, SET_SUMMARY, UPDATE_PRIVACY,
    UPDATE_SKILL, UPDATE_ABOUT, UPDATE_EXTRA_EXPERIENCE, ADD_EXTRA_EXPERIENCE, DELETE_EXTRA_EXPERIENCE,
    UPDATE_PROJECT, ADD_PROJECT, DELETE_PROJECT} from '../actions/types'
import {initialState} from '../reducers/myProfileReducer'

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
                console.log("Now using mock data", {"mock data": {...initialState, skills:"Java\nPython\nC++\nRuby"}});
                dispatch({type: FETCH_MY_PROFILE_DATA, payload: {...initialState, skills:"Java\nPython\nC++\nRuby"}});
            })
    }
}

export function updatePrivacy(privacy) {
    return (dispatch) => {
        axios.get("http://rest.learncode.academy/api/reacttest/tweets") // mock request should be PUT
            .then((response) => {
                dispatch({type: UPDATE_PRIVACY, payload: privacy});
            })
    }
}

export function updateSkill(skills) {
    return (dispatch) => {
        axios.get("http://rest.learncode.academy/api/reacttest/tweets") // mock request should be PUT
            .then((response) => {
                dispatch({type: UPDATE_SKILL, payload: skills});
            })
    }
}

export function updateAbout(about) {
    return (dispatch) => {
        axios.get("http://rest.learncode.academy/api/reacttest/tweets") // mock request should be PUT
            .then((response) => {
                dispatch({type: UPDATE_ABOUT, payload: about});
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
    return (dispatch) => {
        axios.get("http://rest.learncode.academy/api/reacttest/tweets") // mock request should be POST
            .then((response) => {
                dispatch({type: ADD_EXTRA_EXPERIENCE, payload: experience});
            })
    }
}

export function deleteExtraExperience(experience) {
    return (dispatch) => {
        axios.get("http://rest.learncode.academy/api/reacttest/tweets") // mock request should be DELETE
            .then((response) => {
                dispatch({type: DELETE_EXTRA_EXPERIENCE, payload: experience});
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
// return (dispatch) => {
//     console.lod("yudong action");
//     axios.get("http://rest.learncode.academy/api/reacttest/tweets")
//         .then((response) => {
//             console.log("FETCH_MY_PROFILE_SUCCEED", response);
//             console.log("Now using mock data", {"mock data": "mock data"});
//             dispatch({type: "FETCH_MY_PROFILE_SUCCEED", payload: response.data})
//         })
//         .catch((err) => {
//             console.log("fetch error!");
//             // dispatch({type: "FETCH_MY_PROFILE_REJECTED", payload: err})
//         });
// };


// export function fetchMyProfile() {
//     return {
//         type: FETCH_MY_PROFILE_DATA,
//         payload: "2"


//     Promise((resolve, reject) => {
//     console.log("yudong4");
//     axios.get("http://rest.learncode.academy/api/reacttest/tweets")
//         .then((response) => {
//             console.log("FETCH_MY_PROFILE_SUCCEED", response);
//             console.log("Now using mock data", {"mock data":"mock data"});
//             // dispatch({type: "FETCH_MY_PROFILE_SUCCEED", payload: response.data})
//             resolve();
//         })
//         .catch((err) => {
//             // dispatch({type: "FETCH_MY_PROFILE_REJECTED", payload: err})
//             reject();
//         })
// })

// }


export function fetchSucceed(data) {
    return {
        type: "FETCH_MY_PROFILE_SUCCEED",
        payload: data,
    }
}

export function fetchRejected(data) {
    return {
        type: "FETCH_MY_PROFILE_REJECTED",
        payload: data,
    }
}