import React, {Component} from 'react';
import {Modal, Table, Button} from 'react-bootstrap';
import PrivacyItem from "./PrivacyItem";
import {connect} from "react-redux";
import {updatePrivacy} from "../../actions/myProfileActions";
import {bindActionCreators} from "redux";
import PrivacyToPublic from "./PrivacyToPublic";


class Privacy extends Component {

    constructor(props){
        super(props);
        this.state = {
            privacy:this.props.privacy
        }


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.hideAndReloadData = this.hideAndReloadData.bind(this);
    }

    handleChange(stateName, e){
        this.setState({privacy: {...this.state.privacy, [stateName]: e.target.checked}});
    }


    handleSubmit(){
        this.props.hideFunc();
        this.props.updatePrivacy(this.state.privacy);
    }


    hideAndReloadData() {
        this.props.hideFunc();
        this.setState({privacy : this.props.privacy});
    }

    componentWillReceiveProps(nextProps){
        this.setState({privacy: nextProps.privacy})
    }

    render() {
        return (
            <Modal show={this.props.show} onHide={this.hideAndReloadData}>
                <Modal.Header closeButton>
                    <Modal.Title>Privacy Setting</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table className="privacyTable" condensed>
                            <PrivacyToPublic value={this.state.privacy.visibleToPublic} action={this.handleChange} />
                    </Table>
                    <p><b>Make your information visible or invisible to other students.</b></p>
                <Table className="privacyTable" striped condensed hover >
                    <thead>
                    <tr>
                        <th></th>
                        <th>Field</th>
                        <th>Visible</th>
                    </tr>
                    </thead>
                    <tbody>
                        <PrivacyItem text="Photo" value={this.state.privacy.photo} stateName="photo" action={this.handleChange} />
                        <PrivacyItem text="Coop" value={this.state.privacy.coop} stateName="coop" action={this.handleChange} />
                        <PrivacyItem text="Phone" value={this.state.privacy.phone} stateName="phone" action={this.handleChange} />
                        <PrivacyItem text="Email" value={this.state.privacy.email} stateName="email" action={this.handleChange} />
                        <PrivacyItem text="Address" value={this.state.privacy.address} stateName="address" action={this.handleChange} />
                        <PrivacyItem text="Linkedin" value={this.state.privacy.linkedin} stateName="linkedin" action={this.handleChange} />
                        <PrivacyItem text="Github" value={this.state.privacy.github} stateName="github" action={this.handleChange} />
                        <PrivacyItem text="Facebook" value={this.state.privacy.facebook} stateName="facebook" action={this.handleChange} />
                        <PrivacyItem text="Website" value={this.state.privacy.website} stateName="website" action={this.handleChange} />
                        <PrivacyItem text="Courses" value={this.state.privacy.courses} stateName="courses" action={this.handleChange} />
                        <PrivacyItem text="Experience" value={this.state.privacy.extraExperience} stateName="extraExperience" action={this.handleChange} />
                        <PrivacyItem text="Project" value={this.state.privacy.project} stateName="project" action={this.handleChange} />
                        <PrivacyItem text="Skill" value={this.state.privacy.skill} stateName="skill" action={this.handleChange} />
                    </tbody>
                </Table>
                </Modal.Body>
                <Modal.Footer>
                <Button bsStyle="success" onClick={this.handleSubmit}>Save</Button>
                <Button onClick={this.hideAndReloadData}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}


const mapStateToProps = state => {
    return {
        privacy: state.myProfileReducer.Privacies
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
    updatePrivacy
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Privacy)