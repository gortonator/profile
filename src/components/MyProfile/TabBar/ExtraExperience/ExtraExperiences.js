import React, {Component} from 'react';
import AddExperience from "./AddExperience"
import {Modal, Button} from "react-bootstrap"
import EditExperience from "./EditExperience";
import EditIcon from "../About/EditIcon";
import styled from "styled-components";
import {updateExtraExperience} from "../../../../actions/myProfileActions";
import {connect} from "react-redux";

class ExtraExperiences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNew: false,
            edit:false,
            editItem: null,
            index:999999,
            experiences: this.props.extraExperiences
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
                                <td width="95%"><h2 className="companyName">{item.CompanyName}</h2></td>
                                <td width="5%">
                                    <EditIcon onClick={() => this.handleEdit(item)}></EditIcon>
                                </td>
                            </tr>
                            <tr><td><p className="grayContent">{item.Title}</p></td></tr>
                            <tr><td><p className="grayContent">{item.StartDate + " - " + item.EndDate}</p></td></tr>
                            <tr><td><TextArea className="grayContent">{item.Description}</TextArea></td></tr>
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
            </div>
        )
    }
}

const TextArea = styled.p`
        white-space: pre-line;
    `

const mapStateToProps = state => {
    return {
        extraExperiences: state.myProfileReducer.extraExperiences
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateExtraExperience: (extraExperience) => dispatch(updateExtraExperience(extraExperience))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExtraExperiences)