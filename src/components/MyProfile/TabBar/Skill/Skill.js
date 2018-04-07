import React, {Component} from 'react';
import EditIcon from "../About/EditIcon";
import styled from "styled-components";
import {updateSkill} from "../../../../actions/myProfileActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Skill extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: 'haha',
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
        if(this.state.editable) {
            return <TextArea defaultValue={this.state.content} onBlur={this.handleChange} autoFocus/>;

        }else {
            return <Show>{ this.state.content}</Show>;
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({content: nextProps.skills})
    }

    render() {
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
        skills: state.myProfileReducer.studentRecord.skill
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateSkill
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Skill)

