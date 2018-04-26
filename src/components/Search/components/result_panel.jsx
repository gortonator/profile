import React from 'react';
import StudentResult from './student_result';

class ResultPanel extends React.Component {

	render() {
		const width = window.innerWidth;
		const isMobile = width < 600;

		const mobileResultListStyle = {
			justifyContent: "flex-start",
			display: "flex",
			flexWrap: "wrap",
			webKitFlexWrap: "wrap",
			minHeight: "100vh",
			midWidth: width
		}

		const resultListStyle = {
			justifyContent: "flex-start",
			display: "flex",
			flexWrap: "wrap",
			webKitFlexWrap: "wrap",
			minHeight: "100vh",
		}

	    var students = this.props.results.Students === undefined ? [] : this.props.results.Students;

		let isLoading = students !== undefined ? (students.length < 1) : true;
		var mainDiv = null;

		if(isLoading){
			mainDiv = (
			<div>
				<h6>No results match your filter</h6>
			</div>
			);
		}
		else{
			mainDiv = (
			<div 
				id="result_list"
				style={resultListStyle}>
				{students.map(function(student, index){
					return (
					<StudentResult
						key={index}
						firstname={student.firstName}
						lastname={student.lastName}
						coop={student.coops}
						grad={student.graduationYear}
						enroll={student.enrollmentYear}
						campus={student.campus}
						nuid={student.nuId} />
					);
				})}
			</div>
			);
		}

	    return(
	      <div id="result_panel_main_container">
	      	{
	      		mainDiv
	      	}
	  		</div>
	  	);
	}
}


export default ResultPanel;
