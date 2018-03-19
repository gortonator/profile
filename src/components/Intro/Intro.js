import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Panel, Button, Modal, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';


class Intro extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
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
            <div>
                <Panel bsStyle="danger">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">
                            Summary
                            <Button style={{float: "right"}} bsStyle="danger" bsSize="xsmall" onClick={this.handleShow}>
                                Edit
                            </Button>
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        {this.state.summary}
                    </Panel.Body>
                </Panel>

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

            </div>
        )
    }
}

export default Intro