import React, {Component} from 'react';
import AboutItem from "./AboutItem";
import styled from "styled-components";

class About extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="wrapper">
                <AboutTable>
                    <AboutItem labelText="Phone" keyName="phone" action={this.props.action} value={this.props.phone}/>
                    <AboutItem labelText="Email" value={this.props.email}/>
                    <AboutItem labelText="Address" keyName="address" action={this.props.action} value={this.props.address} />
                    <AboutItem labelText="Linkedin" keyName="linkedin" action={this.props.action} value={this.props.linkedin}  isLink/>
                    <AboutItem labelText="Github" keyName="github" action={this.props.action} value={this.props.github}  isLink/>
                    <AboutItem labelText="Facebook" keyName="facebook" action={this.props.action} value={this.props.facebook}  isLink/>
                    <AboutItem labelText="Website" keyName="website" action={this.props.action} value={this.props.website}  isLink/>
                </AboutTable>
            </div>
        )
    }
}

const AboutTable = styled.table`
        width: 100%;
        line-height: 20px;
    `

export default About
