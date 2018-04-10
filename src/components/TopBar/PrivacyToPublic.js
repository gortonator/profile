import React, {Component} from 'react';
import {Checkbox} from 'react-bootstrap';

class PrivacyToPublic extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({value : e.target.checked})
        this.props.action("visibletopublic", e);
    }

    render() {
        return (
            <tr>
                <td width="80%"><b>Do you want to show your profile in public search results?</b></td>
                <td width="20%"><Checkbox checked={this.state.value} onChange={this.handleChange}/>
                </td>
            </tr>
        )
    }
}




export default PrivacyToPublic