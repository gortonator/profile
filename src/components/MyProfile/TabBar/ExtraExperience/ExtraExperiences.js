import React, {Component} from 'react';
import AddExperience from "./AddExperience"
import {Modal, Button} from "react-bootstrap"
import EditExperience from "./EditExperience";
import EditIcon from "../About/EditIcon";
import styled from "styled-components";
import {updateExtraExperience, addExtraExperience, deleteExtraExperience} from "../../../../actions/myProfileActions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

class ExtraExperiences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNew: false,
            edit:false,
            editItem: null,
            index:999999,
            neuId: this.props.neuId
        };
    }

    increase = () => {
        this.setState({
            index: this.props.extraExperiences.length
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
        this.props.addExtraExperience(item);
    };

    handleDel = (item) => {
        this.props.deleteExtraExperience(item);
    };

    handleEdit = (item) => {
        this.props.updateExtraExperience(item);
    };

    render() {
        // console.log(this.props.extraExperiences);
        return (
            <div className="wrapper">
                <table width="100%">
                    <tbody>
                    <tr>
                        <td width="90%">
                            <p className="tab-content-subtitle">MY EXPERIENCES</p>
                        </td>
                        <td width="10%">
                            <Button onClick={this.clickOnAdd}>
                                Add
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </table>

                {this.props.extraExperiences.map(item => (
                    <div key={item.extraExperienceId}>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="95%"><h2 className="companyName">{item.companyName}</h2></td>
                                <td width="5%">
                                    <EditIcon onClick={() => this.clickOnEdit(item)}></EditIcon>
                                </td>
                            </tr>
                            <tr><td><p className="grayContent">{item.title}</p></td></tr>
                            <tr><td><p className="grayContent">{item.startDate + " - " + item.endDate}</p></td></tr>
                            <tr><td><TextArea className="grayContent">{item.description}</TextArea></td></tr>
                            </tbody>
                        </table>
                        <hr/>
                    </div>
                ))}

                <Modal show={this.state.addNew} onHide={this.clickOnAdd}>
                    <AddExperience
                        closePopup={this.clickOnAdd}
                        text={"Add New Experience"}
                        experiences={this.props.extraExperiences}
                        increaseIndex={this.increase}
                        index={this.state.index}
                        addFunc={this.handleAdd}
                        neuId={this.state.neuId}
                    >
                    </AddExperience>
                </Modal>

                <Modal show={this.state.edit} onHide={this.setEditFlag}>
                    <EditExperience
                        closePopup={this.setEditFlag}
                        text={"Edit Experience"}
                        experiences={this.props.extraExperiences}
                        item={this.state.editItem}
                        deleteFunc={this.handleDel}
                        editFunc={this.handleEdit}
                    >
                    </EditExperience>
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
        extraExperiences: state.myProfileReducer.ExtraExperiences,
        neuId: state.myProfileReducer.StudentRecord.neuId
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateExtraExperience,
    addExtraExperience,
    deleteExtraExperience,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExtraExperiences)