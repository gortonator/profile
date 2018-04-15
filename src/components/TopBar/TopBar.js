import React, {Component} from 'react';
import {Navbar, NavItem, Nav, Image, FormGroup, FormControl, Button} from 'react-bootstrap';
import profile_image from '../../image/profile_image.png'
import logo from '../../image/neu.png'
import styled from "styled-components";
import Privacy from "./Privacy";
import SearchBox from "./SearchBox";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";



class TopBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showPrivacy: false,
            imagePreviewUrl: "data:image/jpeg;base64, " + this.props.file.photo
        };

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
        let {imagePreviewUrl} = this.state;
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
                            <NavItem eventKey={2} href="/myProfile">
                                <Image style={{height: "25px"}} src={imagePreviewUrl} alt="pic" circle/>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Privacy show={this.state.showPrivacy} hideFunc={this.handleClose}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
