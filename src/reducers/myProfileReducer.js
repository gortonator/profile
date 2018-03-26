import {FETCH_MY_PROFILE_DATA, SET_SUMMARY} from '../actions/types'

export const initialState = {
    intro: {
        nuid: '2',
        firstname: 'Yudong',
        lastname: 'Wang',
        middlename: 'N/A',
        gender: 'Male',
        age: 22,
        email: null,
        campus: 'Boston',
        startterm: 'Spring 2016',
        expectedgraduation: 'June 2018',
        enrollmentstatus: 'Yes (active student)',
        photo: 'empty',
    },

    workExperiences: [
        {
            WorkExperienceId: '',
            NeuId: '',
            CompanyName: '',
            StartDate: '',
            EndDate: '',
            CurrentJob: '',
            Title: '',
            Description: '',
        },
    ],

    courses: [
        {
            CourseId: '',
            CourseName: '',
            Description: '',
        },
    ],

    extraExperiences: [
        {
            WorkExperienceId: '',
            NeuId: '',
            CompanyName: '',
            StartDate: '',
            EndDate: '',
            CurrentJob: '',
            Title: '',
            Description: '',
        },
    ],

    projects: [
        {
            ProjectId: '',
            NeuId: '',
            ProjectName: '',
            StartDate: '',
            EndDate: '',
            Description: '',
        },
    ],

    skills: [],


    //=====================================================
    //The following can be changed
    about: {
        Phone: '',
        Address: '',
        Linkedin: '',
        Facebook: '',
        Github: '',
        Website: '',
        Birthday: '',
        summary: 'Hi, I am Yudong. I am a M.S. candidate in Computer Science from Northeastern University-Seattle' +
        'campus. Graduate date: June, 2018 (Expected) Please feel free to contact me via ' +
        'wangyudong53138@gmail.com',
        privacy: true,
    }
};

export default function myProfileReducer(state = initialState,
    {type, payload}) {
    console.log("reducer", type, payload);
    switch (type) {
        case FETCH_MY_PROFILE_DATA:
            console.log("yudong2", payload);
            return payload;
        case SET_SUMMARY:
            console.log("=================================");
            return {...state, about:{...state.about, summary:payload}};
        default:
            console.log("not found any type match in reducer! you are given type " + type);
            return state;
    }
}