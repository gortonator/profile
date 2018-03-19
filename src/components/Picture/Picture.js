import React, {Component} from 'react';
import profile_image from '../../image/profile_image.png'

class Picture extends Component {

    render() {
        return (
            <div>
                <img style={{width: "100%"}} src={profile_image} alt="pic"/>
            </div>
        )
    }
}

export default Picture