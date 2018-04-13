import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default class ProjectContent extends Component {
    constructor() {
        super();
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);
    }

    handleTitle(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    handleStartDate(date) {
        this.props.changeStartDate(date);
    }

    handleEndDate(date) {
        this.props.changeEndDate(date);
    }

    handleDesc(e) {
        const description = e.target.value;
        this.props.changeDesc(description);
    }

    render() {
        return (
            <div>
                <div><label htmlFor={"projectName"}>Project Name</label></div>
                <input placeholder={"Project Name"} onChange={this.handleTitle.bind(this)} id={"projectName"} value={this.props.item.projectName} size={50}></input>
                <br /><br />

                <div><label htmlFor={"startDate"}>Start Date</label></div>
                <DatePicker type="date" dateFormat="MM-DD-YYYY" selected={this.props.item.startDate} id={"startDate"} onChange={this.handleStartDate} value={this.props.item.startDate} />
                <br />

                <div><label htmlFor={"endDate"}>End Date</label></div>
                <DatePicker dateFormat="MM-DD-YYYY" selected={this.props.item.endDate} id={"endDate"} onChange={this.handleEndDate} value={this.props.item.endDate} />
                <br />

                <div><label htmlFor={"desc"}>Description</label></div>
                <textarea placeholder={"Description"} onChange={this.handleDesc.bind(this)} id={"desc"}
                    value={this.props.item.description} cols={50} rows={6}></textarea>
            </div>
        )
    }
}