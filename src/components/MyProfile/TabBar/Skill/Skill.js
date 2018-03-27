import React, {Component} from 'react';
import EditIcon from "../About/EditIcon";
import styled from "styled-components";

import {updateSkill} from "../../../../actions/myProfileActions";
import {connect} from "react-redux";

class Skill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.skills,
            editable: false
        };
        this.makeEditable = this.makeEditable.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    makeEditable() {
        this.setState({
            editable: true
        })
    }

    handleChange(e) {
        this.props.updateSkill(e.target.value);
        this.setState({
            content: e.target.value,
            editable: false
        })
    }

    getContentComponent() {
        // if(this.state.editable) {
        //     return <TextArea defaultValue={this.state.content} onBlur={this.changeContent} autoFocus/>;
        // }else {
        //     return <Show>{this.state.content}</Show>;
        // }
        if(this.state.editable) {
            return <TextArea defaultValue={this.state.content} onBlur={this.handleChange} autoFocus/>;

        }else {
            return <Show>{ this.props.skills[0]}</Show>;
        }

    }

    render() {
        console.log("skill", this.props.skills[0]);
        return (
            <div className="wrapper">
                <p className="tab-content-subtitle">MY SKILLS&nbsp;&nbsp;&nbsp;&nbsp;<EditIcon onClick={this.makeEditable}/></p>
                <br/>
                {this.getContentComponent()}
            </div>
        )
    }
}

const TextArea = styled.textarea`
        width: 70%;   
        height: 300px;
        resize: none;
        line-height: 50px;
    `

const Show = styled.p`
        white-space: pre-line;
        line-height: 50px;
        color: #777777;
    `

const mapStateToProps = state => {
    return {
        skills: state.myProfileReducer.skills
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateSkill: (skills) => dispatch(updateSkill(skills))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Skill)

