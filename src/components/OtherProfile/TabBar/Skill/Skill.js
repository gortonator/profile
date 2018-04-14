import React, {Component} from 'react';
import styled from "styled-components";
import {updateSkill} from "../../../../actions/myProfileActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Skill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.skills,
            editable: false
        };
    }


    getContentComponent() {
        return <Show>{ this.props.skills}</Show>;

    }

    componentWillReceiveProps(nextProps) {
        this.setState({content: nextProps.skills})
    }

    render() {
        return (
            <div className="wrapper">
                <p className="tab-content-subtitle">MY SKILLS&nbsp;&nbsp;&nbsp;&nbsp;</p>
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
        skills: state.otherProfileReducer.StudentRecord.skill
    };
};

export default connect(mapStateToProps)(Skill)

