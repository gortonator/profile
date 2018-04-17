import React, { Component } from 'react';
import TopBar from '../TopBar/TopBar'
import styled from "styled-components";

import '../../css/SearchPage.css';

import StudentFilterContainer from './containers/student_filter_container';
import ResultPanelContainer from './containers/result_panel_container';

import {
	setAllCampuses,
	setAllCoops,
	setAllCourses,
	setAllGraduationYears,
	setAllEnrollmentYears,
	setResults
} from '../../actions/searchPageActions';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as FilterActions from './redux/filter_actions';
import axios from 'axios';

const MOBILE_VIEW_WIDTH = 600;

const config  = {
	timeout: 1000,
	"Content-Type": "application/json"
}

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
        };
    }

    componentDidMount(){
    	this.getData();
    }

    getData(){
		const store = this.props.store;

		console.log(this.props, "is token here");

		let results =
		{
			Coops:[],
			Campuses:[],
			EnrollmentYear:[],
			GraduationYear:[],
			Courses:[]
		};

		this.props.setAllCampuses(this.props.login.token);
		this.props.setAllCoops(this.props.login.token);
		this.props.setAllCourses(this.props.login.token);
		this.props.setAllGraduationYears(this.props.login.token);
		this.props.setAllEnrollmentYears(this.props.login.token);
		this.props.setResults(this.props.login.token, results)
	}

    componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	handleSubmit(){
		
	}

	render() {
		const {width} = this.state;
		const isMobile = width < MOBILE_VIEW_WIDTH;

		const mobileView = (
			<div>
				<div id="main_container">
					<div id="filter_panel_mobile">
						<StudentFilterContainer
							isMobile={isMobile}
							submitHandler= {this.handleSubmit.bind(this)}/>
					</div>
					<div id="result_panel_mobile">
						<ResultPanelContainer isMobile={isMobile}/>
					</div>
				</div>
			</div>
		)

		const desktopView = (
			<div>
				<div id="main_container">
					<div id="filter_panel">
						<StudentFilterContainer
							isMobile={isMobile}
							submitHandler= {this.handleSubmit.bind(this)}/>
					</div>
					<div id="result_panel">
						<ResultPanelContainer isMobile={isMobile}/>
					</div>
				</div>
			</div>
		);

		return (
        <div style={{margin: "2%"}}>
            <TopBar/>
            <Wrapper>
            	{isMobile ? mobileView : desktopView}
            </Wrapper>
         </div>
         );
	}
}


const Wrapper = styled.div` 
    font-family: 'Oxygen', sans-serif;
    font-size: 18px;
    width:70%;
    margin:auto;
 `;

const mapDispatchToProps = (dispatch) => bindActionCreators({
    setAllCampuses,
	setAllCoops,
	setAllCourses,
	setAllGraduationYears,
	setAllEnrollmentYears,
	setResults
}, dispatch);

function mapStateToProps(state) {
    return {
        login: state.myProfileReducer.LoginInfo,
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(Search);
