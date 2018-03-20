import React, {Component} from 'react';

import {Row, Col, Grid, css, ListGroup, ListGroupItem, Panel, Button, Modal, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

import EditIcon from "../TabBar/About/EditIcon";


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
            			<Col md={3}> <p className="intro-name">{this.state.intro.name}</p> </Col>
            			<Col md={3}> <p>{this.state.intro.city}, {this.state.intro.state}</p> </Col>
            		</Row>

            		<p>PROFILE <hr className="inline-hr"/></p>

            		<Row className="show-grid">
            			<Col md={3}> <p>Gender:   {this.state.intro.gender}</p> </Col>
            			<Col md={3}> <p>Start Term:    {this.state.intro.startTerm}</p> </Col>
            		</Row>

            		<Row className="show-grid">
            			<Col md={3}> <p>Campus:   {this.state.intro.campus}</p> </Col>
            			<Col md={3}> <p>End Term:     {this.state.intro.endTerm}</p> </Col>
            			
            		</Row>

            	
                    <Row className="show-grid">
                    	<Col md={3}> <p>Summary <EditIcon onClick={this.handleShow}/></p> </Col>
                     
                    </Row>

                    <Row className="show-grid">
                    	<Col md={8}> <p>{this.state.summary}</p> </Col>
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