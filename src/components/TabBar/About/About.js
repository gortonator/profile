import React, {Component} from 'react';
import AboutItem from "./AboutItem";
import styled from "styled-components";

class About extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Wrapper>
                <AboutTable>
                    <AboutItem labelText="Phone" keyName="phone" action={this.props.action} value={this.props.phone} modifiable={true}/>
                    <AboutItem labelText="Email" value={this.props.email} modifiable={false}/>
                    <AboutItem labelText="Address" keyName="address" action={this.props.action} value={this.props.address} modifiable={true}/>
                    <AboutItem labelText="DoB" value={this.props.dob} modifiable={false}/>
                    <AboutItem labelText="Linkedin" keyName="linkedin" action={this.props.action} value={this.props.linkedin} modifiable={true}/>
                    <AboutItem labelText="Github" keyName="github" action={this.props.action} value={this.props.github} modifiable={true}/>
                    <AboutItem labelText="Facebook" keyName="facebook" action={this.props.action} value={this.props.facebook} modifiable={true}/>
                    <AboutItem labelText="Website" keyName="website" action={this.props.action} value={this.props.website} modifiable={true}/>
                </AboutTable>
            </Wrapper>
        )
    }
}

const AboutTable = styled.table`
        width: 800px;
        font-size: 20px;
        line-height: 20px;
    `

const Wrapper = styled.div`
        color: #000000;
        width: 800px;
        font-size: 20px;
        margin: 2%;
    `

export default About
