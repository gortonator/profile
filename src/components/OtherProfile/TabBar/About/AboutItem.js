import React, {Component} from 'react';
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
        this.changeContent = this.changeContent.bind(this);
        this.openNewPage = this.openNewPage.bind(this);
    }

    makeEditable() {
        this.setState({
            editable: true
        });
    }

    changeContentOnEnter(event) {
        if(event.keyCode === 13){ // Press ENTER
            this.changeContent(event)
        }
    }

    changeContent(event) {
        this.setState({
            content: event.target.value,
            editable: false
        })
        this.props.action(this.props.keyName, event.target.value);
    }

    openNewPage(){
        window.open("http://" + this.props.value);
    }

    getContentComponent() {
        if(this.state.editable) {
            return <FormControl defaultValue={this.props.value} onKeyDown={this.changeContentOnEnter} onBlur={this.changeContent} autoFocus/>;
        }else if(this.props.isLink){
            return <LinkText onClick={this.openNewPage}>{this.props.value}</LinkText>;
        }else{
            return <p className="grayContent">{this.props.value}</p>;
        }
    }

    render() {


        return (
            <tbody>
            <tr>
                <td width="30%" height="50px">{this.props.labelText}:</td>
                <td width="50%">{this.getContentComponent()}</td>
                <td width="20%" align="middle"></td>
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
