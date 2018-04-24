import React from 'react';
import StudentResult from './student_result';

class ResultPanel extends React.Component {

	render() {
		const resultListStyle = {
			justifyContent: "center",
			display: "flex",
			flexWrap: "wrap",
			webKitFlexWrap: "wrap",
		}

		console.log(this.props, "result panel rerender");

		var {isMobile} = this.props;

	    var students = this.props.results.Students === undefined ? [] : this.props.results.Students;

		var isLoading = students === undefined;
		var mainDiv = null;

		if(isLoading){
			mainDiv = <div className="loader"></div>;
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
