import React, {Component} from 'react';
import {Row, Col, Grid, css, Button, Modal, FormGroup, FormControl} from 'react-bootstrap';
import EditIcon from "../TabBar/About/EditIcon";
import styled from "styled-components";
import location from '../../../image/location.jpeg'


class Intro extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {

        	intro : {
        		"name" : "Jeremy Rose",
        		"city" : "Seattle",
        		"state" : "WA",
        		"gender" : "Male",
        		"campus" : "Seattle",
        		"startTerm" : "Fall 2016",
        		"endTerm" : "May 2018",
        		"summary" : "I'm a student"
        	},
            summary: this.props.summary,
            show: false
        };


    }


    handleClose() {
        this.setState({show: false});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleChange(event) {
        this.setState({summary: event.target.value});
    }

    handleSubmit(){
        this.setState({show: false});
        this.props.handler(this.state.summary);
    }


    render() {
        console.log(this.state);
        return (
            	<Grid>
            		<Row className="show-grid">
            			<Col md={12}> <p id="intro-name">{this.state.intro.name}
            			&nbsp;&nbsp;&nbsp;
            			<img id="locationImage" src={location} alt="pic"/>&nbsp;
            			<span id="location" className="grayContent">{this.state.intro.city}, {this.state.intro.state}</span></p></Col>
            		</Row>

            		<br/>
            		<Row className="show-grid">
                        <Col md={3}><p>Gender:</p></Col>
                        <Col md={3}><p className="grayContent">{this.state.intro.gender}</p></Col>
                        <Col md={3}><p>Start Term:</p></Col>
                        <Col md={3}><p className="grayContent">{this.state.intro.startTerm}</p></Col>
            		</Row>

            		<Row className="show-grid">
                        <Col md={3}><p>Campus:</p></Col>
                        <Col md={3}><p className="grayContent">{this.state.intro.campus}</p> </Col>
            			<Col md={3}><p>End Term:</p></Col>
                        <Col md={3}><p className="grayContent">{this.state.intro.endTerm}</p> </Col>

            		</Row>

            	    <hr/>
                    <Row className="show-grid">
                    	<Col md={12}> <p className="subtitle">Summary&nbsp;&nbsp;&nbsp;&nbsp;<EditIcon onClick={this.handleShow}/></p> </Col>

                    </Row>

                    <Row className="show-grid">
                    	<Col md={12}> <p className="grayContent">{this.state.summary}</p> </Col>
                    </Row>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Summary</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup controlId="formControlsTextarea">
                            <FormControl rows="3" value={this.state.summary} onChange={this.handleChange} componentClass="textarea"/>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.handleSubmit}>Save</Button>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

                </Grid>

        )
    }
}

export default Intro