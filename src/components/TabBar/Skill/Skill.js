import React, {Component} from 'react';
import EditIcon from "../About/EditIcon";
import styled from "styled-components";
import {FormControl, FormGroup} from "react-bootstrap";

class Skill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.value,
            editable: false
        };
        this.makeEditable = this.makeEditable.bind(this);
        this.changeContent = this.changeContent.bind(this);
    }

    makeEditable() {
        this.setState({
            editable: true
        })
    }

    changeContent(event) {
        this.setState({
            content: event.target.value,
            editable: false
        })
        this.props.action(this.props.keyName, event.target.value);
    }

    getContentComponent() {
        if(this.state.editable) {
            return <TextArea defaultValue={this.state.content} onBlur={this.changeContent} autoFocus/>;
        }else {
            return <Show>{this.state.content}</Show>;
        }
    }

    render() {

        return (
            <Wrapper>
                <p>{this.props.labelText}&nbsp;&nbsp;&nbsp;&nbsp;<EditIcon onClick={this.makeEditable}/></p>
                <br/>
                {this.getContentComponent()}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
        width: 100%;
        margin: 2%;
    `

const TextArea = styled.textarea`
        width: 70%;   
        height: 300px;
        resize: none;
        line-height: 50px;
    `

const Show = styled.p`
        white-space: pre-line;
        line-height: 50px;
    `

export default Skill
