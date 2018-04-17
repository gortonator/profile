import {
    FETCH_MY_PROFILE_DATA, UPDATE_PRIVACY, UPDATE_SKILL, UPDATE_ABOUT, UPDATE_IMAGE,
    UPDATE_EXTRA_EXPERIENCE, UPDATE_PROJECT, DELETE_PROJECT, DELETE_EXTRA_EXPERIENCE, ADD_EXTRA_EXPERIENCE, ADD_PROJECT,
    UPDATE_SUMMARY, SET_LOGIN_INFO, SEARCH_STUDENT
} from '../actions/types'

export default function myProfileReducer(state = null,
    {type, payload}) {
    switch (type) {
        case SET_LOGIN_INFO:
            return {...state, LoginInfo: {id:payload.id, token: payload.token}};
        case FETCH_MY_PROFILE_DATA:
            return {...payload, LoginInfo:{...state.LoginInfo}, SearchResult:[...state.SearchResult]};
        case UPDATE_SUMMARY:
            return {...state, StudentRecord: {...state.StudentRecord, summary: payload}};
        case UPDATE_IMAGE:
            return {...state, Photo: {...state.Photo, photo:payload}};
        case UPDATE_PRIVACY:
            return {...state, Privacies: payload};
        case UPDATE_SKILL:
            return {...state, StudentRecord: {...state.StudentRecord, skills: payload}};
        case UPDATE_ABOUT:
            return {...state, StudentRecord: payload};
        case ADD_EXTRA_EXPERIENCE:
            return {...state, ExtraExperiences:state.ExtraExperiences.concat(payload)};
        case UPDATE_EXTRA_EXPERIENCE:
            return {...state, ExtraExperiences:state.ExtraExperiences.map(
                    experience => experience.extraExperienceId === payload.extraExperienceId ? experience = payload : experience)};
        case DELETE_EXTRA_EXPERIENCE:
            return {...state, ExtraExperiences: state.ExtraExperiences.filter(experience => experience.extraExperienceId !== payload.extraExperienceId)};
        case ADD_PROJECT:
            return {...state, Projects:state.Projects.concat(payload)};
        case UPDATE_PROJECT:
            return {...state, Projects:state.Projects.map(
                    project => project.projectId === payload.projectId ? project = payload : project)};
        case DELETE_PROJECT:
            return {...state, Projects: state.Projects.filter(project => project.projectId !== payload.projectId)};
        case SEARCH_STUDENT:
            return {...state, SearchResult: payload};
        default:
            // console.log("not found any type match in reducer! you are given type " + type);
            return state;
    }
}
