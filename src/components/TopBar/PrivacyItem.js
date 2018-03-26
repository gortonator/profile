import React, {Component} from 'react';
import {Navbar, NavItem, Nav, Modal, Table, FormGroup, FormControl, Button, Checkbox} from 'react-bootstrap';
import profile_image from '../../image/profile_image.png'
import logo from '../../image/neu.png'
import styled from "styled-components";


class PrivacyItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({value : e.target.checked})
        this.props.action(this.props.stateName, e);
    }

    render() {
        return (
            <tr>
                <td width="20%"></td>
                <td width="50%">{this.props.text}</td>
                <td width="30%"><Checkbox checked={this.state.value} onChange={this.handleChange}/>
                </td>
            </tr>
        )
    }
}




export default PrivacyItem