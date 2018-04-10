import React, {Component} from 'react';
import Picture from './Picture/Picture'
import Intro from './Intro/Intro'
import Coop from './Coop/Coop'
import TabBar from './TabBar/TabBar'
import styled from "styled-components";
import {Grid, Row, Col, css} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchMyProfile} from "../../actions/myProfileActions"

class MyProfile extends Component {


    componentWillMount() {
        // this.props.fetchMyProfile();
    }

    render() {
        return (
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
        );
    }
}

const Wrapper = styled.div` 
    font-family: 'Oxygen', sans-serif;
    font-size: 18px;
    `;

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMyProfile: () => dispatch(fetchMyProfile())
    };
};


export default connect(null, mapDispatchToProps)(MyProfile)
