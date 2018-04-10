import React, {Component} from 'react';
import {Checkbox} from 'react-bootstrap';

class PrivacyItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({value : e.target.checked})
        this.props.action(this.props.stateName, e);
    }

    componentWillReceiveProps(nextProps){
        this.setState({value: nextProps.value})
    }

    render() {
        return (
            <tr>
                <td width="20%"></td>
                <td width="50%">{this.props.text}</td>
                <td width="30%"><Checkbox checked={this.state.value} onChange={this.handleChange}/>
                </td>
            </tr>
        )
    }
}




export default PrivacyItem