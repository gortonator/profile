import React, {Component} from 'react';
import AddProject from "./AddProject"
import {Modal, Button} from "react-bootstrap"
import EditProject from "./EditProject";
import EditIcon from "../About/EditIcon";
import styled from "styled-components";

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
            <Wrapper>
                <table>
                    <tbody>
                    <tr>
                        <td width="90%">
                            <SubTitle1>My Projects</SubTitle1>
                        </td>
                        <td width="10%">
                            <Button onClick={this.addNewProject}>
                                Add
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>

                {this.state.projects.map(item => (
                    <div key={item.id}>
                        <table>
                            <tbody>
                            <tr>
                                <td width="97%">
                                    <h2>{item.projectName}</h2>
                                </td>
                                <td width="3%">
                                    <EditIcon onClick={() => this.handleEdit(item)}></EditIcon>
                                </td>
                            </tr>
                            <tr><td><p>{item.startDate + " - " + item.endDate}</p></td></tr>
                            <tr><td><p>{item.desc}</p></td></tr>
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
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
        margin: 2%;
        font-family: 'Oxygen', sans-serif;
    `

const SubTitle1 = styled.h5`
    font-family: 'Khand', sans-serif;
    font-size: 2em;
    font-weight: 400;
    color: #e78885;
    `