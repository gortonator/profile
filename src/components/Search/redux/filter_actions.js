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

export function addSelectedCourse(course) {
	return {
		type: 'ADD_SELECTED_COURSE',
		payload: course
	}
}

export function removeSelectedCourse(course) {
	return {
		type: 'REMOVE_SELECTED_COURSE',
		payload: course
	}
}

export function addSelectedCampus(campus) {
	return {
		type: 'ADD_SELECTED_CAMPUS',
		payload: campus
	}
}

export function removeSelectedCampus(campus) {
	return {
		type: 'REMOVE_SELECTED_CAMPUS',
		payload: campus
	}
}

export function addSelectedGraduationYear(year) {
	return {
		type: 'ADD_SELECTED_GRADUATION_YEAR',
		payload: year
	}
}

export function removeSelectedGraduationYear(year) {
	return {
		type: 'REMOVE_SELECTED_GRADUATION_YEAR',
		payload: year
	}
}

export function addSelectedEnrollmentYear(year) {
	return {
		type: 'ADD_SELECTED_ENROLLMENT_YEAR',
		payload: year
	}
}

export function removeSelectedEnrollmentYear(year) {
	return {
		type: 'REMOVE_SELECTED_ENROLLMENT_YEAR',
		payload: year
	}
}

export function setDisplayedCoops(coops) {
	return {
		type: 'SET_DISPLAYED_COOPS',
		payload: coops
	}
}

export function setDisplayedCourses(courses) {
	return {
		type: 'SET_DISPLAYED_COURSES',
		payload: courses
	}
}

export function setDisplayedCampuses(campuses) {
	return {
		type: 'SET_DISPLAYED_CAMPUSES',
		payload: campuses
	}
}

export function setDisplayedGraduationYears(years) {
	return {
		type: 'SET_DISPLAYED_GRADUATION_YEARS',
		payload: years
	}
}

export function setDisplayedEnrollmentYears(years) {
	return {
		type: 'SET_DISPLAYED_ENROLLMENT_YEARS',
		payload: years
	}
}

export function setAllCoops(coops) {
	return {
		type: 'SET_ALL_COOPS',
		payload: coops
	}
}

export function setAllCourses(courses) {
	return {
		type: 'SET_ALL_COURSES',
		payload: courses
	}
}

export function setAllCampuses(campuses) {
	return {
		type: 'SET_ALL_CAMPUSES',
		payload: campuses
	}
}

export function setAllGraduationYears(years) {
	return {
		type: 'SET_ALL_GRADUATION_YEARS',
		payload: years
	}
}

export function setAllEnrollmentYears(years) {
	return {
		type: 'SET_ALL_ENROLLMENT_YEARS',
		payload: years
	}
}

export function setResults(students){
	return {
		type: 'SET_RESULTS',
		payload: students
	}
}


