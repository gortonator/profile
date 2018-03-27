import React, {Component} from 'react';
import EditIcon from "./EditIcon";
import {FormControl} from "react-bootstrap";
import styled from "styled-components";

class AboutItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.value,
            editable: false
        };
        this.makeEditable = this.makeEditable.bind(this);
        this.changeContentOnEnter = this.changeContentOnEnter.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.openNewPage = this.openNewPage.bind(this);
    }

    makeEditable() {
        this.setState({
            editable: true
        })
    }

    changeContentOnEnter(event) {
        if(event.keyCode === 13){ // Press ENTER
            this.handleChange(event)
        }
    }

    handleChange(e) {
        this.props.action(this.props.keyName, e.target.value);
        this.setState({
            content: e.target.value,
            editable: false
        });
    }

    openNewPage(){
        window.open("http://" + this.state.content);
    }

    getContentComponent() {
        if(this.state.editable) {
            return <FormControl defaultValue={this.state.content} onKeyDown={this.changeContentOnEnter} onBlur={this.handleChange} autoFocus/>;
        }else if(this.props.isLink){
            return <LinkText onClick={this.openNewPage}>{this.state.content}</LinkText>;
        }else{
            return <p className="grayContent">{this.state.content}</p>;
        }
    }

    render() {

        let editIcon = "";
        if(this.props.modifiable) {
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
