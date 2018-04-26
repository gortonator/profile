import React from 'react';
import FilterGroupContainer from '../containers/filter_group_container';
import * as FilterActions from '../redux/filter_actions';

import '../containers/css/StudentFilter.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Label } from 'reactstrap';

import { RaisedButton, Divider, Paper } from 'material-ui';

class StudentFilter extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			isExpand: false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleExpand = this.handleExpand.bind(this);
	}

	handleSubmit(event){
		let store = this.props.store;

		let data =
		{
			Coops: this.props.selected.selectedCoops,
			Campuses: this.props.selected.selectedCampuses,
			EnrollmentYear: this.props.selected.selectedEnrollmentYears,
			GraduationYear: this.props.selected.selectedGraduationYears,
			Courses: this.props.selected.selectedCourses
		};

		let token = this.props.token

		this.props.setResults(token, data);

		this.forceUpdate();
		this.setState({
			isExpand: false,
		});
	}

	handleExpand() {
		this.setState((prevState) => {
			return ({
				isExpand: !prevState.isExpand
			});
		});
	}

	render(){
		const width = window.innerWidth;
		const isMobile = width < 600;
		var submitHandler = this.handleSubmit;

		var coop_title = "Coop";
		var course_title = "Courses Taken";
		var campus_title = "Campus Attended";
		var grad_year_title = "Graduation Year";
		var enroll_year_title = "Enrollment Year";

		var filterContent = (
			<div id="filter_below_fold" >
				<FilterGroupContainer
					name="coop_filter_group"
					title={coop_title}
					selected={this.props.selected.selectedCoops}
					displayed={this.props.displayed.displayedCoops}
					all_items={this.props.displayed.allCoops}
				/>
				<FilterGroupContainer
					name="course_filter_group"
					title={course_title}
					selected={this.props.selected.selectedCourses}
					displayed={this.props.displayed.displayedCourses}
					all_items={this.props.displayed.allCourses}
				/>
				<FilterGroupContainer
					name="campus_filter_group"
					title={campus_title}
					selected={this.props.selected.selectedCampuses}
					displayed={this.props.displayed.displayedCampuses}
					all_items={this.props.displayed.allCampuses}
				/>
				<FilterGroupContainer
					name="enrollment_year_filter_group"
					title={enroll_year_title}
					selected={this.props.selected.selectedEnrollmentYears}
					displayed={this.props.displayed.displayedEnrollmentYears}
					all_items={this.props.displayed.allEnrollmentYears}
				/>
				<FilterGroupContainer
					name="graduation_year_filter_group"
					title={grad_year_title}
					selected={this.props.selected.selectedGraduationYears}
					displayed={this.props.displayed.displayedGraduationYears}
					all_items={this.props.displayed.allGraduationYears}
				/>
			</div>
		)

		var desktopView = (
			<div id="filter_container"
				style={isMobile ? {marginRight:"20px"} : {marginRight:"20px", paddingLeft:"0px"}}>
				<Label 
					className="filter_header_title"
					style={titleLabelStyle}>
					Filter Students
				</Label>
				<hr />
				{filterContent}
				<RaisedButton
					backgroundColor="#e88d8a"
					labelColor="#ffffff"
					onClick={submitHandler}
					label="Update">
				</RaisedButton>
			</div>
		);

		return desktopView;
	}
}

const titleLabelStyle = {
	fontWeight: "100",
	fontSize: "24px",
	color: "#777777"
}

export default StudentFilter;