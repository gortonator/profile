import React, { Component } from 'react';
import TopBar from '../TopBar/TopBar'
import styled from "styled-components";

import * as FilterActions from './redux/filter_actions';
import axios from 'axios';

import '../../css/SearchPage.css';

import StudentFilterContainer from './containers/student_filter_container';
import ResultPanelContainer from './containers/result_panel_container';

const MOBILE_VIEW_WIDTH = 600;

const config  = {
	timeout: 1000,
	"Content-Type": "application/json"
}

class Search extends Component {
    constructor(props) {
        super(props);

        // console.log(this.state);

        //this.getData();

        this.state = {
            width: window.innerWidth,
        };
    }

    componentDidMount(){
    }

    getData(){
			const store = this.props.store;
			var results = "10";

			axios({
				method:'post',
				data: results,
				url:'http://129.10.111.210:8080/undergradschools',
				headers: { 
	        'Content-Type': 'text/plain' 
	      }
			})
			.then(function(response) {
				store.dispatch(FilterActions.setDisplayedUniversities(response.data));
				console.log(response, "top schools");
			})
			.catch(function (error) {
				console.log(error, " top schools error");
			});

			axios({
				method:'post',
				data: results,
				url:'http://129.10.111.210:8080/coops',
				headers: { 
	        'Content-Type': 'text/plain' 
	      }
			})
			.then(function(response) {
				store.dispatch(FilterActions.setDisplayedCoops(response.data));
				console.log(response, "top coops");
			})
			.catch(function (error) {
				console.log(error, " top coops error");
			});

			axios({
				method:'post',
				data: results,
				url:'http://129.10.111.210:8080/undergradmajors',
				headers: { 
	        'Content-Type': 'text/plain' 
	      }
			})
			.then(function(response) {
				store.dispatch(FilterActions.setDisplayedDegrees(response.data));
				console.log(response, "top undergradmajors");
			})
			.catch(function (error) {
				console.log(error, " top majors error");
			});

			axios({
				method:'post',
				data: results,
				url:'http://129.10.111.210:8080/graduationyears',
				headers: { 
	        'Content-Type': 'text/plain' 
	      }
			})
			.then(function(response) {
				store.dispatch(FilterActions.setDisplayedYears(response.data));
				console.log(response, "top graduationyears");
			})
			.catch(function (error) {
				console.log(error, " top graduationyears error");
			});


			axios.get('http://129.10.111.210:8080/undergradschools', config)
			.then(function (response) {
				console.log(response, "all schools");
				store.dispatch(FilterActions.setAllUniversities(response.data));
			})
			.catch(function (error) {
				console.log(error, "all schools");
			});		

			axios.get('http://129.10.111.210:8080/undergradmajors', config)
			.then(function (response) {
				console.log(response, "all majors");
				store.dispatch(FilterActions.setAllDegrees(response.data));
			})
			.catch(function (error) {
				console.log(error, "all degrees");
			});

			axios.get('http://129.10.111.210:8080/graduationyears', config)
			.then(function (response) {
				console.log(response, "all years");
				store.dispatch(FilterActions.setAllYears(response.data));
			})
			.catch(function (error) {
				console.log(error, "all years");
			});

			axios.get('http://129.10.111.210:8080/coops', config)
			.then(function (response) {
				console.log(response, "all coops");
				store.dispatch(FilterActions.setAllCoops(response.data));
			})
			.catch(function (error) {
				console.log(error, "all coops");
			});

			results = 
			{
				BeginIndex:0,
				EndIndex:10000,
				Coops:[],
				UndergradDegree:[],
				UndergradSchool:[],
				GraduationYear:[],
			}

			axios({
				method:'post',
				data: results,
				url:'http://129.10.111.210:8080/students',
			})
			.then(function(response) {
				store.dispatch(FilterActions.setResults(response.data));
				console.log(response, "results");
			})
			.catch(function (error) {
				console.log(error, "results error");
			});
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
								store={this.props.store}
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
								store={this.props.store}
								isMobile={isMobile}
								submitHandler= {this.handleSubmit.bind(this)}/>
						</div>
						<div id="result_panel">
							<ResultPanelContainer isMobile={isMobile}/>
						</div>
					</div>
				</div>
			);

		return isMobile ? mobileView : desktopView;
	}
}


const Wrapper = styled.div` 
    font-family: 'Oxygen', sans-serif;
    font-size: 18px;
    width:70%;
    margin:auto;
 `;


export default Search;
