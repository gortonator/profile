import React from 'react';
import StudentResult from './student_result';
import '../../../css/ResultPanel.css';

class ResultPanel extends React.Component {

	render() {
		console.log(this.props, "result panel rerender");

		var {isMobile} = this.props;

	    var students = [];
	    students = this.props.results.students;

		var isLoading = students === undefined;


		var loadingDiv = <div className="loader"></div>;
		var mainDiv = null;

		if(isLoading){
			mainDiv = <div className="loader"></div>;
		}
		else{
			mainDiv = 
	  	<div>
        <div id="result_list">
          {students.map(function(student, index){
            return (
              <StudentResult
                key={index}
                name={"----"}
                coop={student.coop}
                undergrad={student.undergraddegree}
                location={student.undergradschool}
                year={student.graduationyear}/>
	            );
	          })}
	        </div>
	      </div>;
		}

	    return(
	      <div id="result_panel_main_container">
	      	{
	      		mainDiv
	      	}
	  		</div>
	  	);

		/**
		return(
			<div id="result_panel_main_container">
				{isMobile ? (
					<div>
						<table class="paleRedRows">
			        <thead>
			          <tr>
			            <th>Coop</th>
			            <th>Undergrad Degree Subject</th>
			            <th>Undergraduate University</th>
			            <th>Graduation Year at NEU</th>
			          </tr>
			        </thead>
			        <tbody> 
			        		
			        		{
			        		students.map(function(student){
										return (
											<tr>
												<th>{student.coop}</th>
												<th>{student.undergraddegree}</th>
												<th>{student.undergradschool}</th>
												<th>{student.graduationyear}</th>
											</tr>
										);
									})
			        	}
			        </tbody>
			      </table>
					</div>
				) : (
					<div>
						<div id="result_list">
							<table class="paleRedRows">
				        <thead>
				          <tr>
				            <th>Coop</th>
				            <th>Undergrad Degree Subject</th>
				            <th>Undergraduate University</th>
				            <th>Graduation Year at NEU</th>
				          </tr>
				        </thead>
				        <tbody> 
				        		
				        		{
				        		students.map(function(student){
											return (
												<tr>
													<th>{student.coop}</th>
													<th>{student.undergraddegree}</th>
													<th>{student.undergradschool}</th>
													<th>{student.graduationyear}</th>
												</tr>
											);
										})
				        	}
				        </tbody>
				      </table>
						</div>
					</div>
				)}
			</div>
		);
		**/
	}
}

class ResultItem {
  constructor(name, coop, undergrad, location, year) {
      this.name = name;
      this.coop = coop;
      this.undergrad = undergrad;
      this.location = location;
      this.year = year;
  }
}


export default ResultPanel;
