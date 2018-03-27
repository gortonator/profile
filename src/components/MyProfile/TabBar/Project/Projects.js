import React, {Component} from 'react';
import AddProject from "./AddProject"
import {Modal, Button} from "react-bootstrap"
import EditProject from "./EditProject";
import EditIcon from "../About/EditIcon";
import styled from "styled-components";
import {updateExtraExperience, updateProject} from "../../../../actions/myProfileActions";
import {connect} from "react-redux";


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNew: false,
            edit:false,
            editItem: null,
            index: 999999,
            projects: this.props.projects
        };
    }

    increase = () => {
        this.setState({
            index: this.state.projects.length
        });
    }

    addNewProject = () => {
        this.setState({
            addNew: !this.state.addNew
        });
    }

    editProject = () => {
        this.setState({
            edit: !this.state.edit
        });
    }

    handleAdd = (item) => {
        this.state.projects.push(item)
    }

    handleDel = (item) => {
        this.setState({
            projects: this.state.projects.filter(project => project.id !== item.id)
        })
    }

    handleEdit (item) {
        this.setState({
            edit: !this.state.edit,
            editItem:item
        });
    }

    render() {
        return (
            <div className="wrapper">
                <table width="100%">
                    <tbody>
                    <tr>
                        <td width="90%">
                            <p className="tab-content-subtitle">MY PROJECTS</p>
                        </td>
                        <td width="10%">
                            <Button onClick={this.addNewProject}>
                                Add
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </table>

                {this.state.projects.map(item => (
                    <div key={item.id}>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="95%">
                                    <h2 className="companyName">{item.ProjectName}</h2>
                                </td>
                                <td width="5%">
                                    <EditIcon onClick={() => this.handleEdit(item)}></EditIcon>
                                </td>
                            </tr>
                            <tr><td><p className="grayContent">{item.StartDate + " - " + item.EndDate}</p></td></tr>
                            <tr><td><TextArea className="grayContent">{item.Description}</TextArea></td></tr>
                            </tbody>
                        </table>
                        <hr/>
                    </div>
                ))}

                <Modal show={this.state.addNew} onHide={this.addNewProject}>
                    <AddProject
                        closePopup={this.addNewProject}
                        text={"Add New Project"}
                        projects={this.state.projects}
                        increaseIndex={this.increase}
                        index={this.state.index}
                        addFunc={this.handleAdd}
                    >
                    </AddProject>
                </Modal>

                <Modal show={this.state.edit} onHide={this.editProject}>
                    <EditProject
                        closePopup={this.editProject}
                        text={"Edit Project"}
                        projects={this.state.projects}
                        item={this.state.editItem}
                        deleteFunc={this.handleDel}
                    >
                    </EditProject>
                </Modal>
            </div>
        )
    }
}

const TextArea = styled.p`
        white-space: pre-line;
    `

const mapStateToProps = state => {
    return {
        projects: state.myProfileReducer.projects
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateProject: (project) => dispatch(updateProject(project))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects)