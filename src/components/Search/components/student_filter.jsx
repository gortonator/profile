import React from 'react';
import FilterGroupContainer from '../containers/filter_group_container';
import * as FilterActions from '../redux/filter_actions';

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
		var submitHandler = this.handleSubmit;
		const isMobile = this.props.isMobile;

		var coop_title = "Coop";
		var course_title = "Courses Taken";
		var campus_title = "Campus Attended";
		var grad_year_title = "Graduation Year";
		var enroll_year_title = "Enrollment Year";

		var filterContent = (
			<div id="filter_below_fold">
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

		var mobileView = (
			<div id="filter_container_mobile">
				<div id="filter_above_fold_mobile">
					{this.state.isExpand ? (
						<button
							className="filter_header_title_mobile"
							onClick={this.handleExpand}>
							Students Like Me
							<a className='filter_label_mobile'>
								<svg fill="#615445" height="20" viewBox="0 0 24 24" width="24"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
									<path d="M0 0h24v24H0z" fill="none"/>
								</svg>
							</a>
						</button>
					) : (
						<button className="filter_header_title_mobile" >
							Students Like Me
							<a className='filter_label_mobile' onClick={this.handleExpand}>
								<svg fill="white" height="20" viewBox="0 0 24 24" width="24"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
									<path d="M0 0h24v24H0z" fill="none"/>
								</svg>
							</a>
						</button>
					)}
				</div>
				{
					this.state.isExpand ? (
						<div>
							<div id="filter_contents_container_mobile">
								<div className="filter_items_mobile">{filterContent}</div>
								<div className="filter_submit_botton_mobile">
									<RaisedButton
										backgroundColor="#e88d8a"
										labelColor="#ffffff"
										onClick={submitHandler}
										label="Update">
									</RaisedButton>
								</div>
							</div>
						</div>
					) : null
				}
			</div>
		)

		var desktopView = (
			<div id="filter_container"
				style={{paddingRight:"20px"}}>
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

		return isMobile ? mobileView : desktopView;
	}
}

const titleLabelStyle = {
	fontWeight: "100",
	fontSize: "24px",
	color: "#777777"
}

export default StudentFilter;