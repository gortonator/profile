import React, {Component} from 'react';
import {Row, Col, Grid, css} from 'react-bootstrap';





class Intro extends Component {

    constructor(props) {
        super(props);

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
        	}
        }
    }


    render() {
        return (
            <div>
            	<Grid>
            		<Row className="show-grid">
            			<Col md={3}>
            				<h1>{this.state.intro.name}</h1>
            			</Col>

            			<Col md={3}>
            				<p>{this.state.intro.city}, {this.state.intro.state}</p>
            			</Col>

            		</Row>

            		<p> PROFILE _______________________________________________ </p>

            		<Row className="show-grid">
            			<Col md={3}>
            				<p>Gender:   {this.state.intro.gender}</p>
            			</Col>
            			<Col md={3}>
            				<p>Start Term:    {this.state.intro.startTerm}</p>
            			</Col>
            		</Row>

            		<Row className="show-grid">
            			<Col md={3}>
            				<p>Campus:   {this.state.intro.campus}</p>
            			</Col>
            			<Col md={3}>
            				<p>End Term:     {this.state.intro.endTerm}</p>
            			</Col>
            		</Row>

            		<p>Summary</p>
            		<p>{this.state.intro.summary}</p>

            	</Grid>
               

            </div>
        )
    }
}

export default Intro