import React from 'react';
import FilterGroupContainer from '../containers/filter_group_container';
import '../../../css/StudentFilter.css';
import * as FilterActions from '../redux/filter_actions';

import axios from 'axios';

class StudentFilter extends React.Component {
	constructor(props){
		super(props);

		console.log(props, "monkey");

		this.state = {
			selCoops:'',
			selDegrees:'',
			selUni:'',
			selYears:'',
			isExpand: false,
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleExpand = this.handleExpand.bind(this);
	}

	handleSubmit(event){
		let store = this.props.store;

		var results = 
		{
			BeginIndex:0,
			EndIndex:10000,
			Coops:this.props.selected.selectedCoops,
			UndergradDegree:this.props.selected.selectedDegrees,
			UndergradSchool:this.props.selected.selectedUniversities,
			GraduationYear:this.props.selected.selectedYears,
		}

		console.log(results, "999 input data");

		axios({
			method:'post',
			data: results,
			url:'http://129.10.111.210:8080/students',
		})
		.then(function(response) {
			console.log(response, "999 input data");
			store.dispatch(FilterActions.setResults(response.data));
			console.log(response, "results");
		})
		.catch(function (error) {
			console.log(error, "results error");
		});

		this.props.submitHandler();
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
		console.log(this.props, "proppies");
		var submitHandler = this.handleSubmit;
		const isMobile = this.props.isMobile;

		//placeholder code
		var coop_title = "Coop";
		var degree_title = "Degree Subject";
		var uni_title = "Undergraduate University";
		var year_title = "Year";

		var filterContent = (
			<div id="filter_below_fold">
				<FilterGroupContainer
					name="coop_filter_group"
					title={coop_title}
					displayed={this.props.displayed.displayedCoops}
					all_items={this.props.displayed.allCoops}
				/>
				<FilterGroupContainer
					name="degree_filter_group"
					title={degree_title}
					displayed={this.props.displayed.displayedDegrees}
					all_items={this.props.displayed.allDegrees}
				/>
				<FilterGroupContainer
					name="uni_filter_group"
					title={uni_title}
					displayed={this.props.displayed.displayedUniversities}
					all_items={this.props.displayed.allUniversities}
				/>
				<FilterGroupContainer
					name="year_filter_group"
					title={year_title}
					displayed={this.props.displayed.displayedYears}
					all_items={this.props.displayed.allYears}
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
									<button
										className="button_mobile"
										type="button"
										onClick={submitHandler}>
										Update
									</button>
								</div>
							</div>
						</div>
					) : null
				}
			</div>
		)

		var desktopView = (
			<div id="filter_container">
				<div id="filter_above_fold">
					<a className="filter_header_title">
						Filter Students
					</a>
				</div>
				<hr />
				<div id="filter_contents_container">
					{filterContent}
					<button
						type="button"
						onClick={submitHandler}>
						Update
					</button>
				</div>
			</div>
		);
		return isMobile ? mobileView : desktopView;
	}
}

export default StudentFilter;
