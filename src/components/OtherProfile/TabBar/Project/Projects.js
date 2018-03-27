import React, {Component} from 'react';
import {Modal, Button} from "react-bootstrap"
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
            <div className="wrapper">
                <table width="100%">
                    <tbody>
                    <tr>
                        <td width="90%">
                            <p className="tab-content-subtitle">MY PROJECTS</p>
                        </td>
                        <td width="10%">
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
                                    <h2 className="companyName">{item.projectName}</h2>
                                </td></tr>
                            <tr><td><p className="grayContent">{item.startDate + " - " + item.endDate}</p></td></tr>
                            <tr><td><TextArea className="grayContent">{item.desc}</TextArea></td></tr>
                            </tbody>
                        </table>
                        <hr/>
                    </div>
                ))}

            </div>
        )
    }
}

const TextArea = styled.p`
        white-space: pre-line;
    `