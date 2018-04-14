import {
    FETCH_MY_PROFILE_DATA, FETCH_OTHER_PROFILE_DATA, UPDATE_PRIVACY, UPDATE_SKILL, UPDATE_ABOUT,
    UPDATE_EXTRA_EXPERIENCE, UPDATE_PROJECT, DELETE_PROJECT, DELETE_EXTRA_EXPERIENCE, ADD_EXTRA_EXPERIENCE, ADD_PROJECT,
    UPDATE_SUMMARY, SET_LOGIN_INFO, SEARCH_STUDENT
} from '../actions/types'

import {defineState} from 'redux-localstore'


export const defaultState = {
    ExtraExperiences: [
        {
            neuId: "",
            endDate: "",
            companyName: "",
            description: "",
            title: "",
            extraExperienceId: 0,
            startDate: ""
        }
    ],

    Projects: [
        {
            neuId: "",
            endDate: "",
            description: "",
            projectName: "",
            projectId: 0,
            startDate: ""
        }
    ],

    Courses: [
        {
            courseName: "0",
            description: "0",
            courseId: "0"
        }
    ],

    WorkExperiences: [
        {
            neuId: "",
            workExperienceId: 0,
            companyName: "",
            startDate: "",
            endDate: "",
            currentJob: false,
            coop: false,
            title: "",
            description: "",
        },

    ],

    StudentRecord: {
        neuId: "",
        publicId: 0,
        entryYear: 0,
        lastName: "",
        address: "",
        expectedLastYear: 0,
        visible: false,
        gender: "",
        city: "",
        campus: "",
        degree: "",
        firstName: "",
        entryTerm: "",
        enrollmentStatus: "",
        scholarship: false,
        middleName: "",
        expectedLastTerm: "",
        email: "",
        linkedin: "",
        github: "",
        facebook: "",
        website: "",
        summary: "",
        skills: "",
        race: "",
        zip: "",
        visa: "",
        state: "",
        phoneNum: "",
    },

    Privacies: {
        visibleToPublic: false,
        github: false,
        website: false,
        address: false,
        neuId: "",
        facebook: false,
        photo: false,
        project: false,
        linkedin: false,
        skill: false,
        course: false,
        extraExperience: false,
        publicId: 0,
        email: false,
        coop: false,
        phone: false
    },
    LoginInfo: {
        id: "",
        token: ""
    },
    SearchResult: [
        {
            nuid: "",
            name: "",
            email: ""
        }
    ],
};


const initialState = defineState(defaultState)('otherProfileReducer');


export default function otherProfileReducer(state = initialState,
    {type, payload}) {
    switch (type) {
        case FETCH_OTHER_PROFILE_DATA:
            console.log("other reducer", payload);
            return {...payload, LoginInfo: {...state.LoginInfo}, SearchResult:{...state.SearchResult}};
        default:
            // console.log("not found any type match in reducer! you are given type " + type);
            return state;
    }
}
