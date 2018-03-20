import React, {Component} from 'react';
import {Row, Col, Grid, css} from 'react-bootstrap';
 


class Coop extends Component {

    constructor(props) {
        super(props);

        this.state = {
            coops : [
            {
                "company" : "Amazon.com",
                "title" : "Software Engineer Intern",
                "time" : "May 2017 - Sept 2017",
                "position" : "SDE"
            },
            {
                "company" : "Zillow",
                "title" : "Software Engineer",
                "time" : "May 2017 - Sept 2017",
                "position" : "SDE"
            }  
        ]
        };
    }

    renderCoop() {

        return this.state.coops.map(coop => {
            return (
                <div>
                <h2> {coop.company} </h2>
                <p> {coop.title} </p>
                <p> {coop.time} </p>
                <p> Worked as {coop.position} </p>
                </div>
            );


        });
    }

    render() {
        return (
            <div><p> COOP <hr className="inline-hr"/> </p>
            { this.renderCoop() } </div>
            );
    }


}

export default Coop