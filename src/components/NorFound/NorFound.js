import React, {Component} from 'react';
import styled from "styled-components";
import {Grid, Row, Col, css} from 'react-bootstrap';
import TopBar from '../TopBar/TopBar'


class NotFound extends Component {

    render() {
        return (
            <div style={{margin: "2%"}}>
            <TopBar/>
            <Wrapper>
                <br />
                <br />
                <br />
                <br />
                <br />
                Sorry, you typed an invalid url.
                <hr />
                <h1>404</h1>
            </Wrapper></div>
        );
    }
}

const Wrapper = styled.div` 
    font-family: 'Oxygen', sans-serif;
    font-size: 18px;
    width:70%;
    height:70%;
    margin:auto;
`;


export default NotFound
