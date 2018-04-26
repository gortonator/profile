import React, { Component } from 'react';
import TopBar from '../TopBar/TopBar'
import styled from "styled-components";
import { Button } from 'reactstrap';

import StudentFilterContainer from './containers/student_filter_container';
import ResultPanelContainer from './containers/result_panel_container';

import {
	setAllCampuses,
	setAllCoops,
	setAllCourses,
	setAllGraduationYears,
	setAllEnrollmentYears,
	setResults,
} from '../../actions/searchPageActions';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as FilterActions from './redux/filter_actions';
import axios from 'axios';
import {withRouter} from "react-router-dom";

import {FloatingActionButton, Drawer} from 'material-ui';
import ContentFilterList from 'material-ui/svg-icons/content/filter-list';

const MOBILE_VIEW_WIDTH = 600;

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            navOpen: false
        };

        this.handleNavClose = this.handleNavClose.bind(this);
        this.handleNavToggle = this.handleNavToggle.bind(this);
    }

    componentDidMount(){
    	this.getData();
    }

    	handleNavToggle(){
		this.setState({navOpen: !this.state.navOpen});
	}

	handleNavClose(){
		this.setState({navOpen: false});
	}

    getData(){
		const store = this.props.store;

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
		this.props.setResults(this.props.login.token, results);
	}

    componentWillMount() {
        let loginInfo = this.props.login;
        if (loginInfo.id === "" || loginInfo.token === "") {
            this.props.history.push("/");
        }
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	};

	render() {
		const {width} = this.state;
		const isMobile = width < MOBILE_VIEW_WIDTH;

		let navToggleHandler = this.handleNavToggle;

		let filterFab = 
		<FloatingActionButton 
			style={fabStyle}
			backgroundColor="#e11a2c"
			onClick={navToggleHandler}>
			<ContentFilterList />
		</FloatingActionButton>;

		const mobileView = (
			<div id="main_container">
				<Drawer
					docked={false}
					width={320}
					open={this.state.navOpen}
					onRequestChange={(open) => this.setState({navOpen: open})} >
					<StudentFilterContainer />
				</Drawer>
				{filterFab}
				<ResultPanelContainer isMobile={isMobile}/>
			</div>
		)

		const desktopView = (
			<div 
				id="main_container"
				style={{display:"inline-flex"}}>
				<div 
					id="filter_panel"
					style={{display:"inline-flex"}}>
					<StudentFilterContainer
						isMobile={isMobile} />
				</div>
				<div id="result_panel">
					<ResultPanelContainer isMobile={isMobile}/>
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

const fabStyle = {position: "fixed", zIndex: "2", right: "10px", bottom: "10px"};

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
	setResults,
}, dispatch);

function mapStateToProps(state) {
    return {
        login: state.myProfileReducer.LoginInfo,
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
