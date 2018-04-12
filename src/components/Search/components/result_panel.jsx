import React from 'react';

import '../../../css/ResultPanel.css';

class ResultPanel extends React.Component {

	render() {
		let students = this.props.results.students;

		let isMobile = this.props.isMobile;

		let empty = {coop: "No results", undergradschool: "No results", graduationyear: "No results", undergraddegree: "No results"};
		let loading = {coop: "Loading", undergradschool: "Loading", graduationyear: "Loading", undergraddegree: "Loading"}

		students = students !== undefined ? students : [loading];
		students = students.length !== 0 ? students : [empty];

		console.log(students, "all the data");

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
	}
}


export default ResultPanel;
