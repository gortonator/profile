import React, {Component} from 'react';
import {Navbar, NavItem, Nav, Modal, Table, FormGroup, FormControl, Button, Checkbox} from 'react-bootstrap';
import profile_image from '../../image/profile_image.png'
import logo from '../../image/neu.png'
import styled from "styled-components";
import PrivacyItem from "./PrivacyItem";


class Privacy extends Component {

    constructor(){
        super();
        this.state = {
            show_photo:undefined,
            show_coops:undefined,
            show_phone:undefined,
            show_email:undefined,
            show_address:undefined,
            show_linkedin:undefined,
            show_github:undefined,
            show_facebook:undefined,
            show_website:undefined,
            show_courses:undefined,
            show_experience:undefined,
            show_project:undefined,
            show_skill:undefined,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getPrivacyData = this.getPrivacyData.bind(this);
        this.hideAndReload = this.hideAndReload.bind(this);
    }

    handleChange(stateName, e){
        this.setState({[stateName]: e.target.checked});
        console.log(stateName +" changed");
    }


    handleSubmit(){
        // PUT request
        this.props.hideFunc();
    }

    getPrivacyData(){
        // send GET request...
        this.setState({
            show_photo:true,
            show_coops:false,
            show_phone:true,
            show_email:true,
            show_address:false,
            show_linkedin:false,
            show_github:false,
            show_facebook:true,
            show_website:false,
            show_courses:true,
            show_experience:false,
            show_project:false,
            show_skill:true,
        });
    }

    componentDidMount(){
        this.getPrivacyData();
    }

    hideAndReload() {
        this.props.hideFunc();
        this.getPrivacyData();
    }

    render() {
        console.log(this.state);
        return (
            <Modal show={this.props.show} onHide={this.hideAndReload}>
                <Modal.Header closeButton>
                    <Modal.Title>Privacy Setting</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <p>Make your information visible or invisible to others.</p>
                <Table className="privacyTable" striped condensed hover >
                    <thead>
                    <tr>
                        <th></th>
                        <th>Field</th>
                        <th>Visible</th>
                    </tr>
                    </thead>
                    <tbody>
                        <PrivacyItem text="Photo" value={this.state.show_photo} stateName="show_photo" action={this.handleChange} />
                        <PrivacyItem text="Coop" value={this.state.show_coops} stateName="show_coops" action={this.handleChange} />
                        <PrivacyItem text="Phone" value={this.state.show_phone} stateName="show_phone" action={this.handleChange} />
                        <PrivacyItem text="Email" value={this.state.show_email} stateName="show_email" action={this.handleChange} />
                        <PrivacyItem text="Address" value={this.state.show_address} stateName="show_address" action={this.handleChange} />
                        <PrivacyItem text="Linkedin" value={this.state.show_linkedin} stateName="show_linkedin" action={this.handleChange} />
                        <PrivacyItem text="Github" value={this.state.show_github} stateName="show_github" action={this.handleChange} />
                        <PrivacyItem text="Facebook" value={this.state.show_facebook} stateName="show_facebook" action={this.handleChange} />
                        <PrivacyItem text="Website" value={this.state.show_website} stateName="show_website" action={this.handleChange} />
                        <PrivacyItem text="Courses" value={this.state.show_courses} stateName="show_courses" action={this.handleChange} />
                        <PrivacyItem text="Experience" value={this.state.show_experience} stateName="show_experience" action={this.handleChange} />
                        <PrivacyItem text="Project" value={this.state.show_project} stateName="show_project" action={this.handleChange} />
                        <PrivacyItem text="Skill" value={this.state.show_skill} stateName="show_skill" action={this.handleChange} />
                    </tbody>
                </Table>
                </Modal.Body>
                <Modal.Footer>
                <Button bsStyle="success" onClick={this.handleSubmit}>Save</Button>
                <Button onClick={this.hideAndReload}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}



export default Privacy