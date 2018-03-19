import React, {Component} from 'react';
import {nav, css} from 'react-bootstrap';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem} from 'react-bootstrap';

class TopBar extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect className="navbar-trans">
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">Northeastern University</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem eventKey={1}>
                                <input />
                            </NavItem>
                            <NavItem eventKey={1}>
                                Home2
                            </NavItem>
                            <NavItem eventKey={1}>
                                Home3
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default TopBar