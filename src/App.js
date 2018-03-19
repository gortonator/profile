import React, {Component} from 'react';
import TopBar from './components/TopBar/TopBar'
import Picture from './components/Picture/Picture'
import Intro from './components/Intro/Intro'
import Coop from './components/Coop/Coop'
import TabBar from './components/TabBar/TabBar'
import {Grid, Row, Col, css} from 'react-bootstrap';


class App extends Component {


    constructor(props) {
        super(props);
        this.handleSummaryChange = this.handleSummaryChange.bind(this);

        this.state = {
            //====================================================
            //The following can not be changed
            intro: {
                nuid: '2',
                firstname: 'Yudong',
                lastname: 'Wang',
                middlename: 'N/A',

                gender: 'Male',
                age: 22,
                email: null,
                campus: 'Boston',
                startterm: 'Spring 2016',
                expectedgraduation: 'June 2018',
                enrollmentstatus: 'Yes (active student)',
                photo: 'empty',
            },

            workExperiences: [
                {
                    WorkExperienceId: '',
                    NeuId: '',
                    CompanyName: '',
                    StartDate: '',
                    EndDate: '',
                    CurrentJob: '',
                    Title: '',
                    Description: '',
                },
            ],

            courses: [
                {
                    CourseId: '',
                    CourseName: '',
                    Description: '',
                },
            ],

            extraExperiences: [
                {
                    WorkExperienceId: '',
                    NeuId: '',
                    CompanyName: '',
                    StartDate: '',
                    EndDate: '',
                    CurrentJob: '',
                    Title: '',
                    Description: '',
                },
            ],

            projects: [
                {
                    ProjectId: '',
                    NeuId: '',
                    ProjectName: '',
                    StartDate: '',
                    EndDate: '',
                    Description: '',
                },
            ],

            skills: [],


            //=====================================================
            //The following can be changed
            about: {
                Phone: '',
                Address: '',
                Linkedin: '',
                Facebook: '',
                Github: '',
                Website: '',
                Birthday: '',
                summary: 'Hi, I am Yudong. I am a M.S. candidate in Computer Science from Northeastern University-Seattle' +
                'campus. Graduate date: June, 2018 (Expected) Please feel free to contact me via ' +
                'wangyudong53138@gmail.com',
                privacy: true,
            }


            //======================================================
            //The following is for pop up window

        };
    }


    handleSummaryChange(event) {
        let curState = this.state;
        curState.about.summary = event;
        this.setState(curState);
        console.log("change", this.state.about.summary);
    }

    render() {
        // console.log("page", this.state);
        return (
            <div>
                <TopBar/>
                <Row className="show-grid" style={{margin: "2%"}}>
                    <Col md={4}>
                        <Picture/>
                    </Col>
                    <Col md={8}>
                        <Intro summary={this.state.about.summary} handler={this.handleSummaryChange}/>
                    </Col>
                </Row>
                <Row className="show-grid" style={{margin: "2%"}}>
                    <Col md={4}>
                        <Coop/>
                    </Col>
                    <Col md={8}>
                        <Tab/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
