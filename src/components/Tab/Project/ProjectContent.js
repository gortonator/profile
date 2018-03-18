import React, {Component} from 'react';

export default class ProjectContent extends Component {
    constructor() {
        super();
    }

    handleTitle(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    handleStartDate(e) {
        const startDate = e.target.value;
        this.props.changeStartDate(startDate);
    }

    handleEndDate(e) {
        const endDate = e.target.value;
        this.props.changeEndDate(endDate);
    }

    handleDesc(e) {
        const description = e.target.value;
        this.props.changeDesc(description);
    }

    render() {
        return(
            <div>
                <div><label for={"projectName"}>Project Name</label></div>
                <input onChange={this.handleTitle.bind(this)} id={"projectName"} value={this.props.item.projectName} size={50}></input>
                <br/><br/>

                <div><label for={"startDate"}>Start Date</label></div>
                <input onChange={this.handleStartDate.bind(this)} id={"startDate"} value={this.props.item.startDate} size={50}></input>
                <br/><br/>

                <div><label for={"endDate"}>End Date</label></div>
                <input onChange={this.handleEndDate.bind(this)} id={"endDate"} value={this.props.item.endDate} size={50}></input>
                <br/><br/>

                <div><label for={"desc"}>Description</label></div>
                <textarea onChange={this.handleDesc.bind(this)} id={"desc"}
                          value={this.props.item.description} cols={50} rows={6}></textarea>
            </div>
        )
    }
}
