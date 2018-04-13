import axios from "axios";
import * as FilterActions from '../components/Search/redux/filter_actions';

const results = "10";

export function setDisplayedUniversities(){
	return (dispatch) => {
		axios({
			method:'post',
			data: results,
			url:'https://asd4.ccs.neu.edu:8080/undergradschools',
			headers: { 
	      'Content-Type': 'text/plain' 
	    }
		})
		.then(
			(response) => {
	      dispatch(FilterActions.setDisplayedUniversities(response.data));
	    })
		.catch(
			(error) => {
				console.log(error, " top schools error");
			});
	}
}

export function setDisplayedCoops(){
	return (dispatch) => {
		axios({
			method:'post',
			data: results,
			url:'https://asd4.ccs.neu.edu:8080/coops',
			headers: { 
        'Content-Type': 'text/plain' 
      }
		})
		.then(
			(response) => {
	      dispatch(FilterActions.setDisplayedCoops(response.data));
	    })
		.catch(
			(error) => {
				console.log(error, " top coops error");
		});
	}
}

export function setDisplayedDegrees(){
	return (dispatch) => {
		axios({
			method:'post',
			data: results,
			url:'https://asd4.ccs.neu.edu:8080/undergradmajors',
			headers: { 
        'Content-Type': 'text/plain' 
      }
		})
		.then(
			(response) => {
	      dispatch(FilterActions.setDisplayedDegrees(response.data));
	    })
		.catch(
			(error) => {
				console.log(error, " top degrees error");
		});
	}
}

export function setDisplayedYears(){
	return (dispatch) => {
		axios({
			method:'post',
			data: results,
			url:'httpa://asd4.ccs.neu.edu:8080/graduationyears',
			headers: { 
        'Content-Type': 'text/plain' 
      }
		})
		.then(
			(response) => {
	      dispatch(FilterActions.setDisplayedYears(response.data));
	    })
		.catch(
			(error) => {
				console.log(error, " top years error");
		});
	}
}

export function setAllUniversities(){
	return (dispatch) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8080/undergradschools',
			headers: { 
	      'Content-Type': 'text/plain' 
	    }
		})
		.then(
			(response) => {
	      dispatch(FilterActions.setAllUniversities(response.data));
	    })
		.catch(
			(error) => {
				console.log(error, "all schools error");
			});
	}
}

export function setAllCoops(){
	return (dispatch) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8080/coops',
			headers: { 
        'Content-Type': 'text/plain' 
      }
		})
		.then(
			(response) => {
	      dispatch(FilterActions.setAllCoops(response.data));
	    })
		.catch(
			(error) => {
				console.log(error, "all coops error");
		});
	}
}

export function setAllDegrees(){
	return (dispatch) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8080/undergradmajors',
			headers: { 
        'Content-Type': 'text/plain' 
      }
		})
		.then(
			(response) => {
	      dispatch(FilterActions.setAllDegrees(response.data));
	    })
		.catch(
			(error) => {
				console.log(error, "all degrees error");
		});
	}
}

export function setAllYears(){
	return (dispatch) => {
		axios({
			method:'get',
			url:'https://asd4.ccs.neu.edu:8080/graduationyears',
			headers: { 
        'Content-Type': 'text/plain' 
      }
		})
		.then(
			(response) => {
	      dispatch(FilterActions.setAllYears(response.data));
	    })
		.catch(
			(error) => {
				console.log(error, "all years error");
		});
	}
}

export function setResults(results){
	return (dispatch) => {
		axios({
			method:'post',
			data: results,
			url:'https://asd4.ccs.neu.edu:8080/students'
		})
		.then(
			(response) => {
	      dispatch(FilterActions.setResults(response.data));
				console.log(response, "results");
	    })
		.catch(
			(error) => {
				console.log(error, "results error");
		});
	}
}