export default function studentFilterReducer( state = null, action) {
	switch (action.type) {
		case "SET_DISPLAYED_COOPS": {
			return {
				...state,
				displayedCoops: action.payload
			}
		}
		case "SET_DISPLAYED_CAMPUSES": {
			return {
				...state,
				displayedCampuses: action.payload
			}
		}
		case "SET_DISPLAYED_COURSES": {
			return {
				...state,
				displayedCourses: action.payload
			}
		}
		case "SET_DISPLAYED_GRADUATION_YEARS": {
			return {
				...state,
				displayedGraduationYears: action.payload
			}
		}
		case "SET_DISPLAYED_ENROLLMENT_YEARS": {
			return {
				...state,
				displayedEnrollmentYears: action.payload
			}
		}
		case "SET_ALL_COOPS": {
			return {
				...state,
				allCoops: action.payload
			}
		}
		case "SET_ALL_COURSES": {
			return {
				...state,
				allCourses: action.payload
			}
		}
		case "SET_ALL_CAMPUSES": {
			return {
				...state,
				allCampuses: action.payload
			}
		}
		case "SET_ALL_GRADUATION_YEARS": {
			return {
				...state,
				allGraduationYears: action.payload
			}
		}
		case "SET_ALL_ENROLLMENT_YEARS": {
			return {
				...state,
				allEnrollmentYears: action.payload
			}
		}
		case "SET_RESULTS": {
			return {
				...state,
				results: action.payload
			}
		}
		default: {
			return state
		}
	}
}