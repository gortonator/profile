import React, {Component} from 'react';
import Picture from './Picture/Picture'
import Intro from './Intro/Intro'
import Coop from './Coop/Coop'
import TabBar from './TabBar/TabBar'
import styled from "styled-components";
import {Grid, Row, Col, css} from 'react-bootstrap';
import {connect} from 'react-redux';
import {FETCH_MY_PROFILE_DATA} from "../../actions/types"
import {fetchMyProfile} from "../../actions/myProfileActions"

class MyProfile extends Component {


    componentWillMount() {
        console.log("yudong1");
        this.props.fetchMyProfile();
    }


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

            skills: '',


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
        return (
            <Wrapper>
                <div style={{margin: "2%"}}>
                    <Row className="show-grid row-eq-height">
                        <Col md={4}>
                            <Picture />
                        </Col>
                        <Col md={8}>
                            {/*<Intro summary={this.state.about.summary} handler={this.handleSummaryChange}/>*/}
                            <Intro />
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={4}>
                            <Coop/>
                        </Col>
                        <Col md={8}>
                            <TabBar/>
                        </Col>
                    </Row>
                </div>
            </Wrapper>
        );
    }
}

const divStyle = {
    margin: "2%",
    maxWidth: 700,
};
const Wrapper = styled.div` 
    font-family: 'Oxygen', sans-serif;
    font-size: 18px;
    width: 70%;
    margin: auto;
    `;


const mapStateToProps = state => {
    return {
        summary: state.myProfileReducer.about.summary
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMyProfile: () => dispatch(fetchMyProfile())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)