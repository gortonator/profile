import axios from "axios";
import * as FilterActions from '../components/Search/redux/filter_actions';

const displayed = 5;

export function setAllCampuses(token){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8082/campuses',
			headers: { 
				'Content-Type': 'text/plain',
				"token" : token
			}
		})
		.then((response) => {
			dispatch(FilterActions.setAllCampuses(response.data));
			dispatch(FilterActions.setDisplayedCampuses(response.data.slice(0, displayed)));
		})
		.catch((error) => {
			console.log(error, "all campuses error");
		});
	}
}

export function setAllCoops(token){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8082/coops',
			headers: { 
				'Content-Type': 'text/plain',
				"token" : token
			}
		})
		.then((response) => {
			dispatch(FilterActions.setAllCoops(response.data));
			dispatch(FilterActions.setDisplayedCoops(response.data.slice(0, displayed)));
		})
		.catch((error) => {
			console.log(error, "all coops error");
		});
	}
}

export function setAllCourses(token){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8082/courses',
			headers: { 
				'Content-Type': 'text/plain',
				"token" : token
			}
		})
		.then((response) => {
			dispatch(FilterActions.setAllCourses(response.data));
			dispatch(FilterActions.setDisplayedCourses(response.data.slice(0, displayed)));
		})
		.catch((error) => {
			console.log(error, "all courses error");
		});
	}
}

export function setAllGraduationYears(token){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8082/graduationyears',
			headers: { 
				'Content-Type': 'text/plain',
				"token" : token
			}
		})
		.then((response) => {
			dispatch(FilterActions.setAllGraduationYears(response.data));
			dispatch(FilterActions.setDisplayedGraduationYears(response.data.slice(0, displayed)));
		})
		.catch((error) => {
			console.log(error, "all grad years error");
		});
	}
}

export function setAllEnrollmentYears(token){
	return (dispatch, getState) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8082/enrollmentyears',
			headers: { 
				'Content-Type': 'text/plain',
				"token" : token
			}
		})
		.then((response) => {
			dispatch(FilterActions.setAllEnrollmentYears(response.data));
			dispatch(FilterActions.setDisplayedEnrollmentYears(response.data.slice(0, displayed)));
		})
		.catch((error) => {
			console.log(error, "all enroll years error");
		});
	}
}

export function setResults(token, results){
	return (dispatch, getState) => {
		axios({
			method:'post',
			data: {results},
			url:'https://asd4.ccs.neu.edu:8082/filterstudents',
			headers: { 
				"Content-Type": "application/json",
				"token" : token
			}
		})
		.then((response) => {
			dispatch(FilterActions.setResults(response.data));
		})
		.catch((error) => {
			dispatch(FilterActions.setResults(["test"]));
			console.log(error, "all results error");
		});
	}
}