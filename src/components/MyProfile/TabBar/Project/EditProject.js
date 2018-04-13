import React, {Component} from 'react';
import ProjectContent from "./ProjectContent";
import {Modal, Button} from "react-bootstrap";

export default class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.item.projectId,
            projectName: this.props.item.projectName,
            startDate: new Date(),
            endDate: new Date(),
            description: this.props.item.description,
            neuId: this.props.item.neuId
        }
    }

    changeTitle(title) {
        this.setState({
            projectName: title
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

    changeDesc(description) {
        this.setState({
            description: description
        });
    }

    editProject = () => {
        if(!this.state.projectName || this.state.projectName.trim().length === 0){
            alert("Project Name can't be blank!");
            return
        }

        let item = {
            neuId: this.state.neuId,
            projectId: this.state.id,
            projectName: this.state.projectName,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            description: this.state.description,
        };
        this.props.editFunc(item);

        // this.props.item.ProjectName = this.state.projectName;
        // this.props.item.Description = this.state.description;
        this.props.closePopup()
    };

    deleteProject = () => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            this.props.deleteFunc(this.props.item);
            this.props.closePopup()
        } else {
            // Do nothing!
        }
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
                        changeDesc={this.changeDesc.bind(this)}
                        changeStartDate={this.changeStartDate.bind(this)}
                        changeStartDate={this.changeStartDate.bind(this)}
                        changeEndDate={this.changeEndDate.bind(this)}
                        item={this.state}/> <br/>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.closePopup}>Cancel</Button>
                    <Button bsStyle="primary" onClick={this.editProject}>Save</Button>
                    <Button bsStyle="danger" onClick={this.deleteProject}>Delete</Button>
                </Modal.Footer>
            </div>
        )
    }
}