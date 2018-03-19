import React, {Component} from 'react';
import img_editIcon from '../../images/editIcon.png'
import img_editIcon_black from '../../images/editIcon_black.png'
import styled from "styled-components";

class EditIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseHover: false
        }
    }

    render() {
        return(
            <MyIcon src={this.state.mouseHover ? img_editIcon_black : img_editIcon}
                      alt={'Edit icon'}
                      onMouseOver={() => {this.setState({mouseHover: true})}}
                      onMouseOut={() => {this.setState({mouseHover: false})}}
                      onClick={this.props.onClick}/>
        );
    }
}

const MyIcon = styled.img`
        width: 15px;
        height: 15px;
        
        &:hover {
            cursor: pointer;
        }
    `
export default EditIcon