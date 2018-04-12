import React, {Component} from 'react';
import ProjectContent from "./ProjectContent";
import {Modal, Button} from "react-bootstrap";

export default class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: "",
            description: ""
        }
    }

    changeTitle(title) {
        this.setState({
            projectName: title
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

    AddProject = () => {
        if(!this.state.projectName || this.state.projectName.trim().length === 0){
            alert("Project Name can't be blank!");
            return
        }

        let count = this.props.index + 1;
        let item = {
            neuId: this.props.neuId,
            // projecId: count,
            projectId: 0,
            projectName: this.state.projectName,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
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
                    <ProjectContent
                        changeTitle={this.changeTitle.bind(this)}
                        changeStartDate={this.changeStartDate.bind(this)}
                        changeEndDate={this.changeEndDate.bind(this)}
                        changeDesc={this.changeDesc.bind(this)}
                        item={this.state}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closePopup}>Close</Button>
                    <Button bsStyle="primary" onClick={this.AddProject}>Save</Button>
                </Modal.Footer>
            </div>
        )
    }
}