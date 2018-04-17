import React from 'react';
import '../../../css/Image.css';
import {updateImage} from "../../../actions/myProfileActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        alert('You can only upload JPG file!');
    }

    const isLt2M = file.size / 1024 / 1024 < 0.5;
    if (!isLt2M) {
        alert('Image should be smaller than 500KB!');
    }
    return isLt2M;
}

class Picture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                imagePreviewUrl: "data:image/jpeg;base64, " + this.props.file.photo
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const image = this.state.imagePreviewUrl.split(',');
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
        if (imagePreviewUrl.length > 25) {
            $imagePreview = (<img src={imagePreviewUrl} onClick={(e) => this.upload.click()}/>);
        } else {
            $imagePreview = (<div onClick={(e) => this.upload.click()}>Click here to upload your photo</div>);
        }

        return (
            <div className="previewComponent">
                <div className="image">
                    {$imagePreview}
                </div>

                <input ref={(ref) => this.upload = ref}
                       type="file"
                       style={{display: "none"}}
                       onChange={(e)=>this.handleImageChange(e)} />
                {/*<Button className="uploadButton" onClick={(e) => this.upload.click() }>*/}
                    {/*Upload Picture*/}
                {/*</Button>*/}
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

