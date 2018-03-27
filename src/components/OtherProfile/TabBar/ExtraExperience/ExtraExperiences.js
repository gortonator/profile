import React, {Component} from 'react';
import {Modal, Button} from "react-bootstrap"
import styled from "styled-components";
import Projects from "../Project/Projects";

export default class ExtraExperiences extends Component {
    constructor() {
        super();
        this.state = {
            addNew: false,
            edit:false,
            editItem: null,
            count:0,
            index: 2,
            experiences: [
                {
                    id: 1,
                    jobTitle: "",
                    company: "******",
                    startDate: "",
                    endDate: "",
                    desc: ""
                },
                {
                    id: 2,
                    jobTitle: "Automation Engineer",
                    company: "GE",
                    startDate: "01/01/2016",
                    endDate: "12/31/2016",
                    desc: "I worked as Automation Engineer."
                }
            ]
        };
    }

    increase = () => {
        this.setState({
            index: this.state.experiences.length
        });
    }

    addNewExperience = () => {
        this.setState({
            addNew: !this.state.addNew
        });
    }

    editExperience = () => {
        this.setState({
            edit: !this.state.edit
        });
    }

    handleAdd = (item) => {
        this.state.experiences.push(item)
    }

    handleDel = (item) => {
        this.setState({
            experiences: this.state.experiences.filter(experience => experience.id !== item.id)
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
                            <p className="tab-content-subtitle">MY EXPERIENCES</p>
                        </td>
                        <td width="10%">

                        </td>
                    </tr>
                    </tbody>
                </table>

                {this.state.experiences.map(item => (
                    <div key={item.id}>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="95%"><h2 className="companyName">{item.company}</h2></td>
                                <td width="5%">
                                    
                                </td>
                            </tr>
                            <tr><td><p className="grayContent">{item.jobTitle}</p></td></tr>
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