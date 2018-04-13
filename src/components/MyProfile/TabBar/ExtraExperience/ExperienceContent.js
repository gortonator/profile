import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';


export default class ExperienceContent extends Component {
    constructor() {
        super();
    }

    handleTitle(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    handleCompany(e) {
        const company = e.target.value;
        this.props.changeCompany(company);
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
        return(
            <div>
                <div><label htmlFor={"jobTitle"}>Job Title</label></div>
                <input placeholder={"Job Title"}  onChange={this.handleTitle.bind(this)} id={"jobTitle"} value={this.props.item.jobTitle} size={50}></input>
                <br/><br/>

                <div><label htmlFor={"company"}>Company</label></div>
                <input placeholder={"Company"} onChange={this.handleCompany.bind(this)} id={"company"} value={this.props.item.company} size={50}></input>
                <br/><br/>

                <div><label htmlFor={"startDate"}>Start Date</label></div>
                <DatePicker dateFormat="MM-DD-YYYY" selected={this.props.item.startDate} onChange={this.handleStartDate.bind(this)} id={"startDate"} value={this.props.item.startDate} size={50} />
                <br/><br/>

                <div><label htmlFor={"endDate"}>End Date</label></div>
                <DatePicker dateFormat="MM-DD-YYYY" selected={this.props.item.endDate} onChange={this.handleEndDate.bind(this)} id={"endDate"} value={this.props.item.endDate} size={50}></DatePicker>
                <br/><br/>

                <div><label htmlFor={"desc"}>Description</label></div>
                <textarea placeholder={"Description"} onChange={this.handleDesc.bind(this)} id={"desc"}
                          value={this.props.item.description} cols={50} rows={6}></textarea>
            </div>
        )
    }
}