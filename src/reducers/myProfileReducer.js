import {
    FETCH_MY_PROFILE_DATA, FETCH_OTHER_PROFILE_DATA, UPDATE_PRIVACY, UPDATE_SKILL, UPDATE_ABOUT,
    UPDATE_EXTRA_EXPERIENCE, UPDATE_PROJECT, DELETE_PROJECT, DELETE_EXTRA_EXPERIENCE, ADD_EXTRA_EXPERIENCE, ADD_PROJECT,
    UPDATE_SUMMARY, SET_LOGIN_INFO
} from '../actions/types'

export const initialState = {
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

};

// export const initialState = {
//     intro: {
//         nuid: '2',
//         firstname: 'Yudong',
//         lastname: 'Wang',
//         middlename: 'N/A',
//         gender: 'Male',
//         age: 22,
//         email: null,
//         campus: 'Boston',
//         startterm: 'Spring 2016',
//         expectedgraduation: 'June 2018',
//         enrollmentstatus: 'Yes (active student)',
//         photo: 'empty',
//         state: 'MA',
//         city: 'Boston'
//     },
//
//     workExperiences: [
//         {
//             WorkExperienceId: 1,
//             NeuId: 12345,
//             CompanyName: "Amazon.com",
//             StartDate: "May 2017",
//             EndDate: "Sept 2017",
//             CurrentJob: "SDE",
//             Title: "Software Engineer Intern",
//             Description: '',
//         },
//         {
//             WorkExperienceId: 2,
//             NeuId: 12345,
//             CompanyName:"Zillow",
//             StartDate: 'May 2017',
//             EndDate: 'Sept 2017',
//             CurrentJob: 'SDE',
//             Title: 'Software Engineer',
//             Description: '',
//         },
//     ],
//
//     courses: [
//         {
//             CourseId: '1',
//             CourseName: 'Programming Design Paradigm',
//             Description: 'This is a description',
//         },
//         {
//             CourseId: '2',
//             CourseName: 'Fundamentals of Computer Science',
//             Description: 'This is a description',
//         },
//         {
//             CourseId: '3',
//             CourseName: 'Discrete Structures',
//             Description: 'This is a description',
//         },
//     ],
//
//     extraExperiences: [
//         {
//             id: 1,
//             Title: "Electronic Engineer",
//             CompanyName: "Intel",
//             StartDate: "01/01/2017",
//             EndDate: "12/31/2017",
//             Description: "I worked as Electronic Engineer."
//         },
//         {
//             id: 2,
//             Title: "Automation Engineer",
//             CompanyName: "GE",
//             StartDate: "01/01/2016",
//             EndDate: "12/31/2016",
//             Description: "I worked as Automation Engineer."
//         }
//     ],
//
//     projects: [
//         {
//             id: 1,
//             ProjectName: "Student Website",
//             StartDate: "01/01/2018",
//             EndDate: "04/20/2018",
//             Description: "Designed a student website."
//         },
//         {
//             id: 2,
//             ProjectName: "Data Mining",
//             StartDate: "01/01/2018",
//             EndDate: "04/20/2018",
//             Description: "Data Mining project."
//         }
//     ],
//
//     skills: 'is there any skill there?',
//
//
//     //=====================================================
//     //The following can be changed
//     about: {
//         phone: "+1 (206)306-3178",
//         email: "jeremy@gmail.com",
//         address: "225 Terry Ave, Seattle, WA",
//         linkedin: "www.linkedin.com/jeremy",
//         github: "www.github.com/jeremy",
//         facebook: "www.facebook.com/jeremy",
//         website: "www.jeremy.com/home",
//         summary: 'Hi, I am Yudong. I am a M.S. candidate in Computer Science from Northeastern University-Seattle' +
//         'campus. Graduate date: June, 2018 (Expected) Please feel free to contact me via ' +
//         'wangyudong53138@gmail.com',
//     },
//
//     privacy: {
//         show_photo: true,
//         show_coops: false,
//         show_phone: true,
//         show_email: true,
//         show_address: false,
//         show_linkedin: false,
//         show_github: false,
//         show_facebook: true,
//         show_website: false,
//         show_courses: true,
//         show_experience: false,
//         show_project: false,
//         show_skill: true,
//     }
// };

export default function myProfileReducer(state = initialState,
    {type, payload}) {
    console.log("reducer", type, payload);
    switch (type) {
        case SET_LOGIN_INFO:
            return {...state, LoginInfo: payload};
        case FETCH_MY_PROFILE_DATA:
            return {...state, ...payload};
        case FETCH_OTHER_PROFILE_DATA:
            return payload;
        case UPDATE_SUMMARY:
            return {...state, StudentRecord: {...state.StudentRecord, summary: payload}};
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
        default:
            console.log("not found any type match in reducer! you are given type " + type);
            return state;
    }
}
