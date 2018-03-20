import React, {Component} from 'react';
import {nav, css} from 'react-bootstrap';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem, Image, FormGroup, FormControl, Button} from 'react-bootstrap';
import profile_image from '../../image/profile_image.png'
import logo from '../../image/neu.png'

class TopBar extends Component {

    render() {
        return (
            <div>
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
                            <NavItem eventKey={1} href="#">
                                My Profile
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                <Image style={{height: "21px"}} src={profile_image} alt="pic" circle/>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

const title = {
    fontSize: '25px',
    fontWeight: '800',
    color: '#e78885',
}

export default TopBar