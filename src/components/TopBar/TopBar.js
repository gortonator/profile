import React, {Component} from 'react';
import {Navbar, NavItem, Nav, Modal, Image, FormGroup, FormControl, Button, Checkbox} from 'react-bootstrap';
import profile_image from '../../image/profile_image.png'
import logo from '../../image/neu.png'
import styled from "styled-components";
import Privacy from "./Privacy";


class TopBar extends Component {

    constructor(){
        super();
        this.state = {
            showPrivacy: false
        }

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleShow() {
        this.setState({showPrivacy: true});
    }

    handleClose() {
        this.setState({showPrivacy: false});
    }


    render() {
        return (
            <Wrapper>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <a class="navbar-brand">
                            <Image style={{height: "25px"}} src={logo} alt="pic" />
                        </a>
                        <Navbar.Brand>
                            <a style={title}>Northeastern University</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" placeholder="Find students" />
                            </FormGroup>{' '}
                            <Button type="submit">Search</Button>
                        </Navbar.Form>
                        <Nav pullRight>
                            <NavItem eventKey={1} onClick={this.handleShow}>
                                My Privacy
                            </NavItem>
                            <NavItem eventKey={2} href="/myProfile">
                                My Profile
                            </NavItem>
                            <NavItem eventKey={3} href="/myProfile">
                                <Image style={{height: "25px"}} src={profile_image} alt="pic" circle/>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Privacy show={this.state.showPrivacy} hideFunc={this.handleClose} />
            </Wrapper>
        )
    }
}

const title = {
    fontSize: '25px',
    fontWeight: '800',
    color: '#e78885',
};

const Wrapper = styled.div` 
    font-family: 'Oxygen', sans-serif;
    font-size: 18px;
    width: 70%;
    margin: auto;
    `;

export default TopBar