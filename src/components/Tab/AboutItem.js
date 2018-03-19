import React, {Component} from 'react';
import EditIcon from "./EditIcon";

class AboutItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: this.props.value,
            editable: false,
            // blackIcon: false
        };
        this.makeEditable = this.makeEditable.bind(this);
        this.changeContentOnEnter = this.changeContentOnEnter.bind(this);
        this.changeContent = this.changeContent.bind(this);
    }

    makeEditable() {
        this.setState({
            editable: true
        })
        console.log("111")
    }

    changeContentOnEnter(event) {
        if(event.keyCode == 13){ // Press ENTER
            this.changeContent(event)
        }
    }

    changeContent(event) {
        this.setState({
            content: event.target.value,
            editable: false
        })
        this.props.action(this.props.keyName, event.target.value);
    }

    getContentComponent() {
        if(this.state.editable) {
            return <input defaultValue={this.state.content} onKeyDown={this.changeContentOnEnter} onBlur={this.changeContent} autoFocus/>;
        }else {
            return this.state.content;
        }
    }

    render() {
        // console.log(this.state);

        let editIcon = "";
        if(this.props.modifiable) {
            editIcon = <EditIcon onClick={this.makeEditable}/>;
        }

        return (
            <tr>
                <td width="30%" height="50px">{this.props.labelText}:</td>
                <td style={{color:"#555555"}} width="50%">{this.getContentComponent()}</td>
                <td width="20%">{editIcon}</td>
            </tr>
        )
    }
}

export default AboutItem
