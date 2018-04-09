import React, {Component} from 'react';
import AboutItem from "./AboutItem";
import styled from "styled-components";
import {setSummary, updateAbout} from "../../../../actions/myProfileActions";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            StudentRecord: this.props.StudentRecord
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(keyName, value) {
        this.props.updateAbout({...this.state.StudentRecord, [keyName]: value});
        this.setState({
            StudentRecord: {...this.state.StudentRecord, [keyName]: value}
        });
        console.log("change "+[keyName]+": "+value);
    }

    render() {
        return (
            <div className="wrapper">
                <AboutTable>
                    <AboutItem labelText="Phone" keyName="phoneNum" action={this.handleChange} value={this.state.StudentRecord.phoneNum} modifiable/>
                    <AboutItem labelText="Email" type='email' keyName="email" action={this.handleChange} value={this.state.StudentRecord.email} />
                    <AboutItem labelText="Address" keyName="address" action={this.handleChange} value={this.state.StudentRecord.address} modifiable/>
                    <AboutItem labelText="Linkedin" keyName="linkedin" action={this.handleChange} value={this.state.StudentRecord.linkedin} modifiable isLink/>
                    <AboutItem labelText="Github" keyName="github" action={this.handleChange} value={this.state.StudentRecord.github} modifiable isLink/>
                    <AboutItem labelText="Facebook" keyName="facebook" action={this.handleChange} value={this.state.StudentRecord.facebook} modifiable isLink/>
                    <AboutItem labelText="Website" keyName="website" action={this.handleChange} value={this.state.StudentRecord.website} modifiable isLink/>
                </AboutTable>
            </div>
        )
    }
}

const AboutTable = styled.table`
        width: 100%;
        line-height: 20px;
    `
const mapStateToProps = state => {
    return {
        StudentRecord: state.myProfileReducer.StudentRecord
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateAbout,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About)
