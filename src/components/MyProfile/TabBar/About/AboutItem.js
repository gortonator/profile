import React, {Component} from 'react';
import EditIcon from "./EditIcon";
import {FormControl, FormGroup} from "react-bootstrap";
import styled from "styled-components";

class AboutItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.value,
            editable: false
        };
        this.makeEditable = this.makeEditable.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.openNewPage = this.openNewPage.bind(this);
        this.confirmChange = this.confirmChange.bind(this);
    }

    makeEditable() {
        this.setState({
            editable: true
        })
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    getValidationState() {
        if (this.props.type === null) {
            return null;
        }
        return this.validateEmail(this.state.content) ? 'success' : 'error';
    }

    handleChange(e) {
        this.setState({
            content: e.target.value,
            editable: true
        });
    }

    confirmChange(e) {
        if (!!this.props.type && this.props.type === 'email') {
            if (this.validateEmail(e.target.value)) {
                this.updateStateAndProps(e);
            }
        } else {
            this.updateStateAndProps(e);
        }
    }

    handleEnter(e) {
        if (e.keyCode === 13) {
            this.confirmChange(e);
        }
    }

    updateStateAndProps(e) {
        this.props.action(this.props.keyName, e.target.value);
        this.setState({
            content: e.target.value,
            editable: false
        });
    }

    openNewPage() {
        window.open("http://" + this.state.content);
    }

    getContentComponent() {
        if (this.state.editable) {
            return <form onSubmit={e => {
                e.preventDefault();
            }}>
                <FormGroup
                    controlId={this.state.content}
                    validationState={this.getValidationState()}>
                    <FormControl
                        defaultValue={this.state.content}
                        onChange={this.handleChange}
                        onBlur={this.confirmChange}
                        onKeyDown={this.handleEnter}
                        autoFocus/>
                </FormGroup>
            </form>;

        } else if (this.props.isLink) {
            return <LinkText onClick={this.openNewPage}>{this.state.content}</LinkText>;
        } else {
            return <span className="grayContent">{this.state.content}</span>;
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({content: nextProps.value})
    }

    render() {

        let editIcon = "";
        if (this.props.modifiable) {
            editIcon = <EditIcon onClick={this.makeEditable}/>;
        }

        return (
            <tbody>
            <tr>
                <td width="30%" height="50px">{this.props.labelText}:</td>
                <td width="50%">{this.getContentComponent()}</td>
                <td width="20%" align="middle">{editIcon}</td>
            </tr>
            </tbody>
        )
    }
}

const LinkText = styled.span`
        color: #e78885;
        
        &:hover {
            cursor: pointer;
        }
    `


export default AboutItem
