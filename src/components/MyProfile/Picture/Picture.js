import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import '../../../css/Image.css';
import {updateImage} from "../../../actions/myProfileActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        alert('You can only upload JPG file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 0.2;
    if (!isLt2M) {
        alert('Image should be smaller than 200KB!');
    }
    return isLt2M;
}

function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e) {callback(e.target.result);}
    a.readAsDataURL(blob);
}

class Picture extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.file);
        this.state = {
                imagePreviewUrl: "data:image/jpeg;base64, " + this.props.file.photo
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const image = this.state.imagePreviewUrl.split(',');
        console.log(image);
        this.props.updateImage(image[1]);
    }

    handleImageChange(e) {
        e.preventDefault();
        if(e.target.value.length===0){
            return
        }
        let reader = new FileReader();
        let file = e.target.files[0];

        if(!beforeUpload(file)){
            return
        }

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
            this.handleSubmit(e);
        };
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Your photo for review</div>);
        }

        return (
            <div className="previewComponent">
                <tbody>
                    <tr>
                        <div className="imgPreview">
                            {$imagePreview}
                        </div>
                    </tr>
                    <tr>
                        <form onSubmit={(e)=>this.handleSubmit(e)}>
                            <input ref={(ref) => this.upload = ref}
                                   type="file"
                                   style={{display: "none"}}
                                   onChange={(e)=>this.handleImageChange(e)} />
                            <Button className="uploadButton" onClick={(e) => this.upload.click() }>
                                Upload Picture
                            </Button>
                        </form>
                    </tr>
                </tbody>
            </div>
        )
    }
}

const mapStateToProps = state => {
   return {
        file: state.myProfileReducer.Photo
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updateImage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Picture)

