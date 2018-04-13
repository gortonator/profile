import React, {Component} from 'react';
import ExperienceContent from "./ExperienceContent";
import {Modal, Button} from "react-bootstrap";
import moment from "moment";

export default class AddExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobTitle: "",
            company: "",
            description: "",
            startDate: moment(),
            endDate:moment(),
        }
    }

    changeTitle(title) {
        this.setState({
            jobTitle: title
        });
    }

    changeCompany(company) {
        this.setState({
            company: company
        });
    }

    changeDesc(description) {
        this.setState({
            description: description
        });
    }

    changeStartDate(startDate) {
        this.setState({
            startDate: startDate
        })
    }

    changeEndDate(endDate) {
        this.setState({
            endDate: endDate
        })
    }

    AddExperience = () => {
        if(!this.state.jobTitle || this.state.jobTitle.trim().length === 0){
            alert("Job Title can't be blank!");
            return
        }

        if(!this.state.company || this.state.company.trim().length === 0){
            alert("Company can't be blank!");
            return
        }

        if(this.state.endDate < this.state.startDate) {
            alert("End date should not earlier than start date.")
            return
        }

        let count = this.props.index + 1;
        let item = {
            neuId: this.props.neuId,
            extraExperienceId: count,
            title: this.state.jobTitle,
            companyName: this.state.company,
            startDate: this.state.startDate.format("MM-DD-YYYY"),
            endDate: this.state.endDate.format("MM-DD-YYYY"),
            description: this.state.description,
        };

        this.props.addFunc(item);
        this.props.increaseIndex();
        this.props.closePopup()
    };

    render() {
        return (
            <div>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.text}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ExperienceContent
                        changeTitle={this.changeTitle.bind(this)}
                        changeCompany={this.changeCompany.bind(this)}
                        changeDesc={this.changeDesc.bind(this)}
                        changeStartDate={this.changeStartDate.bind(this)}
                        changeEndDate={this.changeEndDate.bind(this)}
                        item={this.state}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closePopup}>Close</Button>
                    <Button bsStyle="primary" onClick={this.AddExperience}>Save</Button>
                </Modal.Footer>
            </div>
        )
    }
}