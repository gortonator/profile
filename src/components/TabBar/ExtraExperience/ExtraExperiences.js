import React, {Component} from 'react';
import AddExperience from "./AddExperience"
import {Modal, Button} from "react-bootstrap"
import EditExperience from "./EditExperience";
import EditIcon from "../About/EditIcon";
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
                    jobTitle: "Electronic Engineer",
                    company: "Intel",
                    startDate: "01/01/2017",
                    endDate: "12/31/2017",
                    desc: "I worked as Electronic Engineer."
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
            <Wrapper>
                <table width="100%">
                    <tbody>
                    <tr>
                        <td width="90%">
                            <SubTitle1>MY EXPERIENCES</SubTitle1>
                        </td>
                        <td width="10%">
                            <Button onClick={this.addNewExperience}>
                                Add
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </table>

                {this.state.experiences.map(item => (
                    <div key={item.id}>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="95%"><h2>{item.company}</h2></td>
                                <td width="5%">
                                    <EditIcon onClick={() => this.handleEdit(item)}></EditIcon>
                                </td>
                            </tr>
                            <tr><td><p>{item.jobTitle}</p></td></tr>
                            <tr><td><p>{item.startDate + " - " + item.endDate}</p></td></tr>
                            <tr><td><TextArea>{item.desc}</TextArea></td></tr>
                            </tbody>
                        </table>
                        <hr/>
                    </div>
                ))}

                <Modal show={this.state.addNew} onHide={this.addNewExperience}>
                    <AddExperience
                        closePopup={this.addNewExperience}
                        text={"Add New Experience"}
                        experiences={this.state.experiences}
                        increaseIndex={this.increase}
                        index={this.state.index}
                        addFunc={this.handleAdd}
                    >
                    </AddExperience>
                </Modal>

                <Modal show={this.state.edit} onHide={this.editExperience}>
                    <EditExperience
                        closePopup={this.editExperience}
                        text={"Edit Experience"}
                        experiences={this.state.experiences}
                        item={this.state.editItem}
                        deleteFunc={this.handleDel}
                    >
                    </EditExperience>
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

const TextArea = styled.p`
        white-space: pre-line;
    `