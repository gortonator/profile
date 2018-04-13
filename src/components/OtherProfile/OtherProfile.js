import React, {Component} from 'react';
import Picture from './Picture/Picture'
import Intro from './Intro/Intro'
import Coop from './Coop/Coop'
import TabBar from './TabBar/TabBar'
import styled from "styled-components";
import {Grid, Row, Col, css} from 'react-bootstrap';
import {FETCH_OTHER_PROFILE_DATA} from "../../actions/types"
import {connect} from 'react-redux';
import TopBar from '../TopBar/TopBar'

class OtherProfile extends Component {


    render() {
        return (
            <div style={{margin: "2%"}}>
                <TopBar/>
                <Wrapper>
                    <div>
                        <Row className="show-grid row-eq-height">
                            <Col md={4}>
                                <Picture />
                            </Col>
                            <Col md={8}>
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


const mapStateToProps = state => {
    return {
        summary: state.otherProfileReducer.StudentRecord.summary
    };
};


export default connect(mapStateToProps, null)(OtherProfile)