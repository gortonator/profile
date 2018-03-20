import React, {Component} from 'react';
import {nav, css} from 'react-bootstrap';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem, Image, FormGroup, FormControl, Button} from 'react-bootstrap';
import profile_image from '../../image/profile_image.png'

class TopBar extends Component {

    render() {
        return (
            <div>
                {/*<Navbar collapseOnSelect className="navbar-trans">*/}
                    {/*<Navbar.Header>*/}
                        {/*<Navbar.Brand>*/}
                            {/*<a href="/">Northeastern University</a>*/}
                        {/*</Navbar.Brand>*/}
                        {/*<Navbar.Toggle />*/}
                    {/*</Navbar.Header>*/}
                    {/*<Navbar.Collapse>*/}
                        {/*<Nav pullRight>*/}
                            {/*<NavItem eventKey={1}>*/}
                                {/*<input class="form-control mr-sm-2" placeholder="Find students"/>*/}
                            {/*</NavItem>*/}
                            {/*<NavItem eventKey={1}>*/}
                                {/*My profile*/}
                            {/*</NavItem>*/}
                        {/*</Nav>*/}
                    {/*</Navbar.Collapse>*/}
                {/*</Navbar>*/}
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#brand">Northeastern University</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        {/*<Nav>*/}
                            {/*<NavItem eventKey={1} href="#">*/}
                                {/*Link*/}
                            {/*</NavItem>*/}
                            {/*<NavItem eventKey={2} href="#">*/}
                                {/*Link*/}
                            {/*</NavItem>*/}
                            {/*<NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">*/}
                                {/*<MenuItem eventKey={3.1}>Action</MenuItem>*/}
                                {/*<MenuItem eventKey={3.2}>Another action</MenuItem>*/}
                                {/*<MenuItem eventKey={3.3}>Something else here</MenuItem>*/}
                                {/*<MenuItem divider />*/}
                                {/*<MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
                            {/*</NavDropdown>*/}
                        {/*</Nav>*/}
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

export default TopBar