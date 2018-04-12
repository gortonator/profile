export default function studentFilterReducer( state = {
	displayedCoops: [],
	displayedDegrees: [],
	displayedUniversities: [],
	displayedYears: [],
	allCoops: [],
	allDegrees: [],
	allUniversities: [],
	allYears: [],
	results: [],
	error: null
}, action) {
	switch (action.type) {
		case "SET_DISPLAYED_COOPS": {
			return {
				...state,
				displayedCoops: action.payload
			}
		}
		case "SET_DISPLAYED_DEGREES": {
			return {
				...state,
				displayedDegrees: action.payload
			}
		}
		case "SET_DISPLAYED_UNIVERSITIES": {
			return {
				...state,
				displayedUniversities: action.payload
			}
		}
		case "SET_DISPLAYED_YEARS": {
			return {
				...state,
				displayedYears: action.payload
			}
		}
		case "SET_ALL_COOPS": {
			return {
				...state,
				allCoops: action.payload
			}
		}
		case "SET_ALL_DEGREES": {
			return {
				...state,
				allDegrees: action.payload
			}
		}
		case "SET_ALL_UNIVERSITIES": {
			return {
				...state,
				allUniversities: action.payload
			}
		}
		case "SET_ALL_YEARS": {
			return {
				...state,
				allYears: action.payload
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