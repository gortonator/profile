export default function filterGroupReducer( state = {
	selectedCoops: [],
	selectedDegrees: [],
	selectedUniversities: [],
	selectedYears: [],
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
		case "ADD_SELECTED_DEGREE": {
			return {
				...state,
				selectedDegrees: [...state.selectedDegrees, action.payload]
			}
		}
		case "REMOVE_SELECTED_DEGREE": {
			return {
				...state,
				selectedDegrees: state.selectedDegrees.filter(degree => degree !== action.payload)
			}
		}
		case "ADD_SELECTED_UNIVERSITY": {
			return {
				...state,
				selectedUniversities: [...state.selectedUniversities, action.payload]
			}
		}
		case "REMOVE_SELECTED_UNIVERSITY": {
			return {
				...state,
				selectedUniversities: state.selectedUniversities.filter(university => university !== action.payload)
			}
		}
		case "ADD_SELECTED_YEAR": {
			return {
				...state,
				selectedYears: [...state.selectedYears, action.payload]
			}
		}
		case "REMOVE_SELECTED_YEAR": {
			return {
				...state,
				selectedYears: state.selectedYears.filter(year => year !== action.payload)
			}
		}
		default: {
			return state
		}
	}
}