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
                    <AboutItem labelText="Phone" keyName="phone" action={this.props.action} value={this.props.phone} modifiable/>
                    <AboutItem labelText="Email" value={this.props.email}/>
                    <AboutItem labelText="Address" keyName="address" action={this.props.action} value={this.props.address} modifiable/>
                    <AboutItem labelText="DoB" value={this.props.dob}/>
                    <AboutItem labelText="Linkedin" keyName="linkedin" action={this.props.action} value={this.props.linkedin} modifiable isLink/>
                    <AboutItem labelText="Github" keyName="github" action={this.props.action} value={this.props.github} modifiable isLink/>
                    <AboutItem labelText="Facebook" keyName="facebook" action={this.props.action} value={this.props.facebook} modifiable isLink/>
                    <AboutItem labelText="Website" keyName="website" action={this.props.action} value={this.props.website} modifiable isLink/>
                </AboutTable>
            </Wrapper>
        )
    }
}

const AboutTable = styled.table`
        width: 100%;
        line-height: 20px;
    `

const Wrapper = styled.div`
        width: 100%;
        margin: 2%;
        font-family: 'Oxygen', sans-serif;
    `

export default About
