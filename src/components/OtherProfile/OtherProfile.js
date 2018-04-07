import React, {Component} from 'react';
import Picture from './Picture/Picture'
import Intro from './Intro/Intro'
import Coop from './Coop/Coop'
import TabBar from './TabBar/TabBar'
import styled from "styled-components";
import {Grid, Row, Col, css} from 'react-bootstrap';
import {FETCH_OTHER_PROFILE_DATA} from "../../actions/types"
import {fetchOtherProfile} from "../../actions/myProfileActions"
import {connect} from 'react-redux';

class OtherProfile extends Component {


    componentWillMount() {
        console.log("yudong1");
        this.props.fetchOtherProfile();
    }

    render() {
        console.log("yudong other profile", this.props);
        return (
            <Wrapper>
                <div style={{margin: "2%"}}>
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
        summary: state.myProfileReducer.studentRecord.summary
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOtherProfile: () => dispatch(fetchOtherProfile())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OtherProfile)