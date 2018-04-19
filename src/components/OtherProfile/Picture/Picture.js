import profile_image from '../../../image/default-avatar.png'
import React from 'react';
import '../../../css/Image.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePreviewUrl: "data:image/jpeg;base64, " + this.props.file.photo
        };
    }

    render() {
        let {imagePreviewUrl} = "data:image/jpeg;base64, " + this.props.file.photo;
        let $imagePreview = null;
        if (imagePreviewUrl.length > 25) {
            $imagePreview = (<img src={imagePreviewUrl}/>);
        } else {
            $imagePreview = (<img src={profile_image}/>);
        }

        return (
            <div className="previewComponent">
                <div className="image">
                    {$imagePreview}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        file: state.otherProfileReducer.Photo
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Picture)
