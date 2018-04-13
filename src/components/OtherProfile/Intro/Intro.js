import React, {Component} from 'react';
import {Row, Col, Grid, Button, Modal, FormGroup, FormControl} from 'react-bootstrap';
import location from '../../../image/location.jpeg';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateSummary} from "../../../actions/myProfileActions";

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
        this.setState({summary: this.props.summary});
    }

    handleShow() {
        this.setState({show: true});
    }

    handleChange(event) {
        this.setState({summary: event.target.value});
    }

    handleSubmit() {
        this.setState({show: false});
        // this.props.setSummary(this.state.summary);
    }

    render() {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={12}><p id="intro-name">{this.props.intro.firstName}, {this.props.intro.lastName}
                        &nbsp;&nbsp;&nbsp;
                        <img id="locationImage" src={location} alt="pic"/>&nbsp;
                        <span id="location"
                              className="grayContent">{this.props.intro.city}, {this.props.intro.state}</span></p></Col>
                </Row>

                <br/>
                <Row className="show-grid">
                    <Col md={3}><p>Gender:</p></Col>
                    <Col md={3}><p className="grayContent">{this.props.intro.gender}</p></Col>
                    <Col md={3}><p>Start Term:</p></Col>
                    <Col md={3}><p className="grayContent">{this.props.intro.entryTerm + ' ' + this.props.intro.entryYear}</p></Col>
                </Row>

                <Row className="show-grid">
                    <Col md={3}><p>Campus:</p></Col>
                    <Col md={3}><p className="grayContent">{this.props.intro.campus}</p></Col>
                    <Col md={3}><p>End Term:</p></Col>
                    <Col md={3}><p className="grayContent">{this.props.intro.expectedLastTerm + ' ' + this.props.intro.expectedLastYear}</p></Col>

                </Row>

                <hr/>

                <Row className="show-grid">
                    <Col md={12}><p className="grayContent">{this.props.summary}</p></Col>
                </Row>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Summary</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormGroup controlId="formControlsTextarea">
                            <FormControl rows="3" value={this.state.summary} onChange={this.handleChange}
                                         componentClass="textarea"/>
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


const mapStateToProps = state => {
    return {
        summary: state.otherProfileReducer.StudentRecord.summary,
        intro: state.otherProfileReducer.StudentRecord,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateSummary,
}, dispatch);





export default connect(mapStateToProps, mapDispatchToProps)(Intro)