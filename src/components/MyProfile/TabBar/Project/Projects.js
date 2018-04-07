import React, {Component} from 'react';
import AddProject from "./AddProject"
import {Modal, Button} from "react-bootstrap"
import EditProject from "./EditProject";
import EditIcon from "../About/EditIcon";
import styled from "styled-components";
import {updateProject, addProject, deleteProject
} from "../../../../actions/myProfileActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


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
    };

    clickOnAdd = () => {
        this.setState({
            addNew: !this.state.addNew
        });
    };

    clickOnEdit (item) {
        this.setState({
            edit: !this.state.edit,
            editItem:item
        });
    }

    setEditFlag = () => {
        this.setState({
            edit: !this.state.edit
        });
    };

    handleAdd = (item) => {
        this.props.addProject(item);
        this.state.projects.push(item)
    };

    handleDel = (item) => {
        this.props.deleteProject(item);
        this.setState({
            projects: this.state.projects.filter(project => project.projectId !== item.projectId)
        })
    };

    handleEdit = (item) => {
        this.props.updateProject(item);
        let index = this.state.projects.indexOf(this.state.editItem);
        this.state.projects[index] = item;
    };

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
                            <Button onClick={this.clickOnAdd}>
                                Add
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </table>

                {this.state.projects.map(item => (
                    <div key={item.projectId}>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="95%">
                                    <h2 className="companyName">{item.projectName}</h2>
                                </td>
                                <td width="5%">
                                    <EditIcon onClick={() => this.clickOnEdit(item)}></EditIcon>
                                </td>
                            </tr>
                            <tr><td><p className="grayContent">{item.startDate + " - " + item.endDate}</p></td></tr>
                            <tr><td><TextArea className="grayContent">{item.description}</TextArea></td></tr>
                            </tbody>
                        </table>
                        <hr/>
                    </div>
                ))}

                <Modal show={this.state.addNew} onHide={this.clickOnAdd}>
                    <AddProject
                        closePopup={this.clickOnAdd}
                        text={"Add New Project"}
                        projects={this.state.projects}
                        increaseIndex={this.increase}
                        index={this.state.index}
                        addFunc={this.handleAdd}
                    >
                    </AddProject>
                </Modal>

                <Modal show={this.state.edit} onHide={this.setEditFlag}>
                    <EditProject
                        closePopup={this.setEditFlag}
                        text={"Edit Project"}
                        projects={this.state.projects}
                        item={this.state.editItem}
                        deleteFunc={this.handleDel}
                        editFunc={this.handleEdit}
                    >
                    </EditProject>
                </Modal>
            </div>
        )
    }
}

const TextArea = styled.p`
        white-space: pre-line;
    `;

const mapStateToProps = state => {
    return {
        projects: state.myProfileReducer.Projects
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateProject,
    addProject,
    deleteProject
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Projects)