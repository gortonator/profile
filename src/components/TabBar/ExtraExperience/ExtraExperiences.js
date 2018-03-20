import React, {Component} from 'react';
import AddExperience from "./AddExperience"
import {Modal, Button} from "react-bootstrap"
import EditExperience from "./EditExperience";
import EditIcon from "../About/EditIcon";
import styled from "styled-components";

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
                <table>
                    <tbody>
                    <tr>
                        <td width="88.5%">
                            <h2>Experiences</h2>
                        </td>
                        <td width="11.5%">
                            <Button onClick={this.addNewExperience}>
                                Add
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>


                {this.state.experiences.map(item => (
                    <div key={item.id}>
                        <table>
                            <tbody>
                            <tr>
                                <td width="90%"><h2>{item.company}</h2></td>
                                <td width="4%">
                                    <EditIcon onClick={() => this.handleEdit(item)}></EditIcon>
                                </td>
                            </tr>
                            <tr><td><p>{item.jobTitle}</p></td></tr>
                            <tr><td><p>{item.startDate + " - " + item.endDate}</p></td></tr>
                            <tr><td><p>{item.desc}</p></td></tr>
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
    `