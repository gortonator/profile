import React, {Component} from 'react';
import AddExperience from "./AddExperience"
import {Modal, Button} from "react-bootstrap"
import EditExperience from "./EditExperience";

export default class ExtraExperiences extends Component {
    constructor() {
        super();
        this.state = {
            addNew: false,
            edit:false,
            editItem: null,
            index: 2,
            experiences: [
                {
                    id: 1,
                    jobTitle: "Electronic Engineer",
                    company: "Intel",
                    startDate: "01/01/2017",
                    endDate: "12/31/2017",
                    desc: "I worked as Electric Engineer."
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
            <div>
                <table>
                    <tr>
                        <td>
                            <p>Previous Experience</p>
                        </td>
                        <td>
                            <button type="button" class="btn btn-primary" data-toggle="modal" onClick={this.addNewExperience}>
                                Add New Experience
                            </button>
                        </td>
                    </tr>
                </table>

                {this.state.experiences.map(item => (
                    <div>
                        <table>
                            <tr key={item.id}>
                                <td>
                                    <p>{item.jobTitle}</p>
                                </td>
                                <td>
                                    <button type="button" class="btn btn-primary" data-toggle="modal" onClick={() => this.handleEdit(item)}>
                                        Edit
                                    </button>
                                </td>
                            </tr>
                            <tr><p>{item.company}</p></tr>
                            <tr><p>{item.startDate + " - " + item.endDate}</p></tr>
                            <tr><p>{item.desc}</p></tr>
                        </table>
                        <br/>

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
            </div>
        )
    }
}
