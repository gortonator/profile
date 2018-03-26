import React, {Component} from 'react';
import {Row, Col, Grid, css} from 'react-bootstrap';
 


class Coop extends Component {

    constructor(props) {
        super(props);

        this.state = {
            coops : [
            {
                "id" : 1,
                "company" : "Amazon.com",
                "title" : "Software Engineer Intern",
                "time" : "May 2017 - Sept 2017",
                "position" : "SDE"
            },
            {
                "id" : 2,
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
                <div key={coop.id}>
                <h2 className="companyName"> {coop.company} </h2>
                <p className="grayContent"> {coop.title} </p>
                <p className="grayContent"> {coop.time} </p>
                <p className="grayContent"> Worked as {coop.position} </p><hr/>
                </div>
            );


        });
    }

    render() {
        return (
            <div><p className="subtitle"> COOP </p>
                <hr/>
                { this.renderCoop() }
            </div>
            );
    }


}

export default Coop