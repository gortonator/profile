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
            about: this.props.about
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(keyName, value) {
        this.props.updateAbout({...this.state.about, [keyName]: value});
        this.setState({
            about: {...this.state.about, [keyName]: value}
        });
        console.log("change "+[keyName]+": "+value);
    }

    render() {
        return (
            <div className="wrapper">
                <AboutTable>
                    <AboutItem labelText="Phone" keyName="phone" action={this.handleChange} value={this.props.about.phone} modifiable/>
                    <AboutItem labelText="Email" value={this.props.about.email}/>
                    <AboutItem labelText="Address" keyName="address" action={this.handleChange} value={this.props.about.address} modifiable/>
                    <AboutItem labelText="Linkedin" keyName="linkedin" action={this.handleChange} value={this.props.about.linkedin} modifiable isLink/>
                    <AboutItem labelText="Github" keyName="github" action={this.handleChange} value={this.props.about.github} modifiable isLink/>
                    <AboutItem labelText="Facebook" keyName="facebook" action={this.handleChange} value={this.props.about.facebook} modifiable isLink/>
                    <AboutItem labelText="Website" keyName="website" action={this.handleChange} value={this.props.about.website} modifiable isLink/>
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
        about: state.otherProfileReducer.StudentRecord
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateAbout,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(About)
