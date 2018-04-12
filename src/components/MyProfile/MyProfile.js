import React, {Component} from 'react';
import Picture from './Picture/Picture'
import Intro from './Intro/Intro'
import Coop from './Coop/Coop'
import TabBar from './TabBar/TabBar'
import styled from "styled-components";
import {Grid, Row, Col, css} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchMyProfile} from "../../actions/myProfileActions"
import TopBar from '../TopBar/TopBar'
import {bindActionCreators} from 'redux';


class MyProfile extends Component {


    constructor(props) {
        super(props);
        this.state = {
            login: {}
        }
    }

    componentWillMount() {
        // console.log("yudong componentWillMount", localStorage.getItem('login'));
        localStorage.getItem('login') && this.setState({
            login: JSON.parse(localStorage.getItem('login'))
        })
    }

    componentDidMount() {
        // console.log("componentDidMount", this.state.login);
        // this.props.fetchMyProfile(this.state.login);
    }


    render() {
        // console.log("yudong TV", this.props.StudentRecord);
        // console.log("yudong TV2", this.state);
        return (
            <div style={{margin: "2%"}}>
                <TopBar/>
                <Wrapper>
                    <div>
                        <Row className="show-grid row-eq-height">
                            <Col md={4} className={"pictureColumn"}>
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
        StudentRecord: state.myProfileReducer,
    };
};


const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchMyProfile,
}, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)
