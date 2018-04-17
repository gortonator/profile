export function loadState() {
    try {
        let serializedState = sessionStorage.getItem("store");

        if (serializedState === null) {
            return this.initializeState();
        }

        return JSON.parse(serializedState);
    }
    catch (err) {
        return initializeState();
    }
}

export function saveState(state) {
    try {
        let serializedState = JSON.stringify(state);
        sessionStorage.setItem("store", serializedState);

    }
    catch (err) {
    }
}


export function initializeState() {
    let defaultStateMyProfileReducer = {
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

        Photo: {
            neuId: "",
            photo: null
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

    return {
        myProfileReducer: defaultStateMyProfileReducer,
        studentFilter: null,
        filterGroup: null,
        otherProfileReducer: defaultStateMyProfileReducer,
    };
}