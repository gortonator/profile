export function addSelectedCoop(coop) {
	return {
		type: 'ADD_SELECTED_COOP',
		payload: coop
	}
}

export function removeSelectedCoop(coop) {
	return {
		type: 'REMOVE_SELECTED_COOP',
		payload: coop
	}
}

export function addSelectedDegree(degree) {
	return {
		type: 'ADD_SELECTED_DEGREE',
		payload: degree
	}
}

export function removeSelectedDegree(degree) {
	return {
		type: 'REMOVE_SELECTED_DEGREE',
		payload: degree
	}
}

export function addSelectedUniversity(university) {
	return {
		type: 'ADD_SELECTED_UNIVERSITY',
		payload: university
	}
}

export function removeSelectedUniversity(university) {
	return {
		type: 'REMOVE_SELECTED_UNIVERSITY',
		payload: university
	}
}

export function addSelectedYear(year) {
	return {
		type: 'ADD_SELECTED_YEAR',
		payload: year
	}
}

export function removeSelectedYear(year) {
	return {
		type: 'REMOVE_SELECTED_YEAR',
		payload: year
	}
}

export function setDisplayedCoops(coops) {
	return {
		type: 'SET_DISPLAYED_COOPS',
		payload: coops
	}
}

export function setDisplayedDegrees(degrees) {
	return {
		type: 'SET_DISPLAYED_DEGREES',
		payload: degrees
	}
}

export function setDisplayedUniversities(universities) {
	return {
		type: 'SET_DISPLAYED_UNIVERSITIES',
		payload: universities
	}
}

export function setDisplayedYears(years) {
	return {
		type: 'SET_DISPLAYED_YEARS',
		payload: years
	}
}

export function setAllCoops(coops) {
	return {
		type: 'SET_ALL_COOPS',
		payload: coops
	}
}

export function setAllDegrees(degrees) {
	return {
		type: 'SET_ALL_DEGREES',
		payload: degrees
	}
}

export function setAllUniversities(universities) {
	return {
		type: 'SET_ALL_UNIVERSITIES',
		payload: universities
	}
}

export function setAllYears(years) {
	return {
		type: 'SET_ALL_YEARS',
		payload: years
	}
}

export function setResults(students){
	return {
		type: 'SET_RESULTS',
		payload: students
	}
}


