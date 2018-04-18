import React, {Component} from 'react';
import {Navbar, NavItem, Nav, Image, FormGroup, FormControl, Button, Modal} from 'react-bootstrap';
import profile_image from '../../image/profile_image.png'
import logo from '../../image/neu.png'
import styled from "styled-components";
import Privacy from "./Privacy";
import SearchBox from "./SearchBox";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";

class TopBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPrivacy: false,
            showLogout: false,
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleLogoutShow = this.handleLogoutShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogoutClose = this.handleLogoutClose.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleShow() {
        this.setState({showPrivacy: true});
    }

    handleClose() {
        this.setState({showPrivacy: false});
    }


    handleLogoutShow() {
        this.setState({showLogout: true});
    }

    handleLogoutClose() {
        this.setState({showLogout: false});
    }

    logout() {
        sessionStorage.clear();
        this.props.history.push("/");
    }

    render() {
        return (
            <Wrapper>
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a id="brandTitle">Northeastern University</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <SearchBox/>
                        </Navbar.Form>
                        <Nav pullRight>
                            <NavItem eventKey={1} onClick={this.handleShow}>
                                My Privacy
                            </NavItem>
                            <NavItem eventKey={2} onClick={this.handleLogoutShow}>
                                Logout
                            </NavItem>
                            <NavItem eventKey={3} href="/myProfile">
                                <Image style={{height: "25px"}} src={"data:image/jpeg;base64, " + this.props.file.photo} alt="pic" circle/>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Privacy show={this.state.showPrivacy} hideFunc={this.handleClose}/>




                <Modal show={this.state.showLogout} onHide={this.handleLogoutClose}>
                    <Modal.Header>
                        <Modal.Title>Log out</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>Do you really want to log out?</Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.handleLogoutClose}>Close</Button>
                        <Button bsStyle="danger" onClick={this.logout}>Log out</Button>
                    </Modal.Footer>
                </Modal>
            </Wrapper>

        )
    }
}


const BrandTitle = styled.a` 
    font-size: 25px;
    font-weight: 800;
    color: #e78885;
    `;

const Wrapper = styled.div` 
    font-family: 'Oxygen', sans-serif;
    font-size: 18px;
    width: 75%;
    margin: auto;
    `;

const mapStateToProps = state => {
    return {
        file: state.myProfileReducer.Photo
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopBar));
