import {
    FETCH_MY_PROFILE_DATA, SET_SUMMARY, UPDATE_PRIVACY, UPDATE_SKILL, UPDATE_ABOUT,
    UPDATE_EXTRA_EXPERIENCE, UPDATE_PROJECT
} from '../actions/types'

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
            id: 1,
            Title: "Electronic Engineer",
            CompanyName: "Intel",
            StartDate: "01/01/2017",
            EndDate: "12/31/2017",
            Description: "I worked as Electronic Engineer."
        },
        {
            id: 2,
            Title: "Automation Engineer",
            CompanyName: "GE",
            StartDate: "01/01/2016",
            EndDate: "12/31/2016",
            Description: "I worked as Automation Engineer."
        }
    ],

    projects: [
        {
            id: 1,
            ProjectName: "Student Website",
            StartDate: "01/01/2018",
            EndDate: "04/20/2018",
            Description: "Designed a student website."
        },
        {
            id: 2,
            ProjectName: "Data Mining",
            StartDate: "01/01/2018",
            EndDate: "04/20/2018",
            Description: "Data Mining project."
        }
    ],

    skills: '',


    //=====================================================
    //The following can be changed
    about: {
        phone: "+1 (206)306-3178",
        email: "jeremy@gmail.com",
        address: "225 Terry Ave, Seattle, WA",
        linkedin: "www.linkedin.com/jeremy",
        github: "www.github.com/jeremy",
        facebook: "www.facebook.com/jeremy",
        website: "www.jeremy.com/home",
        summary: 'Hi, I am Yudong. I am a M.S. candidate in Computer Science from Northeastern University-Seattle' +
        'campus. Graduate date: June, 2018 (Expected) Please feel free to contact me via ' +
        'wangyudong53138@gmail.com',
    },

    privacy: {
        visibletopublic: true,
        show_photo: true,
        show_coops: false,
        show_phone: true,
        show_email: true,
        show_address: false,
        show_linkedin: false,
        show_github: false,
        show_facebook: true,
        show_website: false,
        show_courses: true,
        show_experience: false,
        show_project: false,
        show_skill: true,
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
        case UPDATE_PRIVACY:
            return {...state, privacy:payload};
        case UPDATE_SKILL:
            return {...state, skills:payload};
        case UPDATE_ABOUT:
            return {...state, about:payload};
        case UPDATE_EXTRA_EXPERIENCE:
            return {...state, extraExperiences:payload};
        case UPDATE_PROJECT:
            return {...state, projects:payload};
        default:
            console.log("not found any type match in reducer! you are given type " + type);
            return state;
    }
}