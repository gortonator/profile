import React, { Component } from 'react';
// import StudentFilterContainer from 'containers/student_filter_container.js';
import ResultPanel from './ResultPanel';
import TopBar from '../TopBar/TopBar'
import styled from "styled-components";

// import * as FilterActions from 'redux/filter_actions';

import * as DummyStuff from './LoadData';

import '../../css/SearchPage.css';
import '../../css/StudentResult.css';
import '../../css/StudentFilter.css';

const MOBILE_VIEW_WIDTH = 600;

class Search extends Component {
    constructor(props) {
        super(props);

        console.log(this.state);

        this.getData();

        this.state = {
            width: window.innerWidth,
        };
    }

    getData(){
        ////////////////////////////////////////////////////////////
        //async calls to api go here////async calls to api go here//
        ////////////////////////////////////////////////////////////
        var displayedCoops = DummyStuff.getTopCoops().coops;
        var displayedDegrees = DummyStuff.getTopDegrees().undergraddegrees;
        var displayedUniversities = DummyStuff.getTopUniversities().undergradschools;
        var displayedYears = DummyStuff.getTopYears().graduationyears;

        var selectedCoops = {};
        var selectedDegrees = {};
        var selectedUniversities = {};
        var selectedYears = {};

        var allCoops = DummyStuff.getAllCoops().coops;
        var allDegrees = DummyStuff.getAllDegrees().undergraddegrees;
        var allUniversities = DummyStuff.getAllUniversities().undergradschools;
        var allYears = DummyStuff.getAllYears().graduationyears;

        var users = DummyStuff.getUsers();
        ////////////////////////////////////////////////////////////
        //async calls to api go here////async calls to api go here//
        ////////////////////////////////////////////////////////////

        const store = this.props.store;
        //
        // store.dispatch(FilterActions.setDisplayedCoops(displayedCoops));
        // store.dispatch(FilterActions.setDisplayedDegrees(displayedDegrees));
        // store.dispatch(FilterActions.setDisplayedUniversities(displayedUniversities));
        // store.dispatch(FilterActions.setDisplayedYears(displayedYears));
        //
        // store.dispatch(FilterActions.setAllCoops(allCoops));
        // store.dispatch(FilterActions.setAllDegrees(allDegrees));
        // store.dispatch(FilterActions.setAllUniversities(allUniversities));
        // store.dispatch(FilterActions.setAllYears(allYears));
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
                <TopBar/>
                <div id="main_container">
                    <div id="filter_panel_mobile">
                        {/*<StudentFilterContainer*/}
                            {/*isMobile={isMobile}*/}
                            {/*submitHandler= {this.handleSubmit.bind(this)}/>*/}
                    </div>
                    <div id="result_panel_mobile">
                        <ResultPanel isMobile={isMobile}/>
                    </div>
                </div>
                <div>
                </div>
            </div>
        )

        const desktopView = (

            <div style={{margin: "2%"}}>
                <TopBar/>
                <Wrapper>
                    <div>
                        <div id="main_container">
                            <div id="filter_panel">
                                {/*<StudentFilterContainer*/}
                                {/*isMobile={isMobile}*/}
                                {/*submitHandler= {this.handleSubmit.bind(this)}/>*/}
                            </div>
                            <div id="result_panel">
                                <ResultPanel isMobile={isMobile}/>
                            </div>
                        </div>
                    </div>
                </Wrapper>
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
