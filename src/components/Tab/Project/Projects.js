import React, {Component} from 'react';
import AddProject from "./AddProject"
import {Modal, Button} from "react-bootstrap"
import EditProject from "./EditProject";

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            addNew: false,
            edit:false,
            editItem: null,
            index: 2,
            projects: [
                {
                    id: 1,
                    projectName: "Student Website",
                    startDate: "01/01/2018",
                    endDate: "04/20/2018",
                    desc: "Designed a student website."
                },
                {
                    id: 2,
                    projectName: "Data Mining",
                    startDate: "01/01/2018",
                    endDate: "04/20/2018",
                    desc: "Data Mining project."
                }
            ]
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
            <div>
                <table>
                    <tr>
                        <td>
                            <p>Project</p>
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary" data-toggle="modal" onClick={this.addNewProject}>
                                Add New Project
                            </button>
                        </td>
                    </tr>
                </table>

                {this.state.projects.map(item => (
                    <div>
                        <table>
                            <tr key={item.id}>
                                <td>
                                    <p>{item.projectName}</p>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" onClick={() => this.handleEdit(item)}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            <tr><p>{item.startDate + " - " + item.endDate}</p></tr>
                            <tr><p>{item.desc}</p></tr>
                        </table>
                        <br/>

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
