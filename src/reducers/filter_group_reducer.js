export default function filterGroupReducer( state = {
	selectedCoops: ["Expedia"],
	selectedCourses: [],
	selectedCampuses: [],
	selectedGraduationYears: [],
	selectedEnrollmentYears: [],
	error: null
}, action) {
	switch (action.type) {
		case "ADD_SELECTED_COOP": {
			return {
				...state,
				selectedCoops: [...state.selectedCoops, action.payload]
			}
		}
		case "REMOVE_SELECTED_COOP": {
			return {
				...state,
				selectedCoops: state.selectedCoops.filter(coop => coop !== action.payload)
			}
		}
		case "ADD_SELECTED_COURSE": {
			return {
				...state,
				selectedCourses: [...state.selectedCourses, action.payload]
			}
		}
		case "REMOVE_SELECTED_COURSE": {
			return {
				...state,
				selectedCourses: state.selectedCourses.filter(course => course !== action.payload)
			}
		}
		case "ADD_SELECTED_CAMPUS": {
			return {
				...state,
				selectedCampuses: [...state.selectedCampuses, action.payload]
			}
		}
		case "REMOVE_SELECTED_CAMPUS": {
			return {
				...state,
				selectedCampuses: state.selectedCampuses.filter(campus => campus !== action.payload)
			}
		}
		case "ADD_SELECTED_GRADUATION_YEAR": {
			return {
				...state,
				selectedGraduationYears: [...state.selectedGraduationYears, action.payload]
			}
		}
		case "REMOVE_SELECTED_GRADUATION_YEAR": {
			return {
				...state,
				selectedGraduationYears: state.selectedGraduationYears.filter(year => year !== action.payload)
			}
		}
		case "ADD_SELECTED_ENROLLMENT_YEAR": {
			return {
				...state,
				selectedEnrollmentYears: [...state.selectedEnrollmentYears, action.payload]
			}
		}
		case "REMOVE_SELECTED_ENROLLMENT_YEAR": {
			return {
				...state,
				selectedEnrollmentYears: state.selectedEnrollmentYears.filter(year => year !== action.payload)
			}
		}
		default: {
			return state
		}
	}
}