import React, { Component } from 'react';
import TopBar from '../TopBar/TopBar'
import styled from "styled-components";

import '../../css/SearchPage.css';

import StudentFilter from './components/student_filter';
import ResultPanelContainer from './containers/result_panel_container';

import {setDisplayedUniversities,
				setDisplayedCoops,
				setDisplayedDegrees,
				setDisplayedYears,
				setAllUniversities,
				setAllCoops,
				setAllYears,
				setAllDegrees,
				setResults} from '../../actions/searchPageActions';

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

        // console.log(this.state);

        this.state = {
            width: window.innerWidth,
        };
    }

    componentDidMount(){
    	this.getData();
    }

    getData(){
			const store = this.props.store;
			

			this.props.setDisplayedUniversities();
			this.props.setDisplayedCoops();
			this.props.setDisplayedDegrees();
			this.props.setDisplayedYears();

			this.props.setAllUniversities();
			this.props.setAllCoops();
			this.props.setAllDegrees();
			this.props.setAllYears();

			var results = 
			{
				BeginIndex:0,
				EndIndex:10000,
				Coops:[],
				UndergradDegree:[],
				UndergradSchool:[],
				GraduationYear:[],
			};

			this.props.setResults(results);
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
							<StudentFilter
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
							<StudentFilter
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
    setDisplayedUniversities, setDisplayedCoops, setDisplayedYears, setDisplayedDegrees,
    setAllUniversities, setAllCoops, setAllYears, setAllDegrees, setResults
}, dispatch);


export default connect(null, mapDispatchToProps)(Search);
