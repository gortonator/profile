import React, {Component} from 'react';
import profile_image from '../../../image/profile_image.png'
import {Image} from "react-bootstrap";

class Picture extends Component {

    render() {
        return (
            <div className="imageContainer">
                <Image id="profile-pic" src={profile_image} alt="pic" thumbnail />
            </div>
        )
    }
}

export default Picture