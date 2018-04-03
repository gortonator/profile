import React, {Component} from 'react';
import styled from "styled-components";
import {connect} from "react-redux";

class ExtraExperiences extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNew: false,
            edit:false,
            editItem: null,
            index:999999,
            experiences: this.props.extraExperiences
        };
    }


    render() {
        return (
            <div className="wrapper">
                <table width="100%">
                    <tbody>
                    <tr>
                        <td width="90%">
                            <p className="tab-content-subtitle">MY EXPERIENCES</p>
                        </td>
                    </tr>
                    </tbody>
                </table>

                {this.state.experiences.map(item => (
                    <div key={item.id}>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="95%"><h2 className="companyName">{item.CompanyName}</h2></td>
                            </tr>
                            <tr><td><p className="grayContent">{item.Title}</p></td></tr>
                            <tr><td><p className="grayContent">{item.StartDate + " - " + item.EndDate}</p></td></tr>
                            <tr><td><TextArea className="grayContent">{item.Description}</TextArea></td></tr>
                            </tbody>
                        </table>
                        <hr/>
                    </div>
                ))}
            </div>
        )
    }
}

const TextArea = styled.p`
        white-space: pre-line;
    `;

const mapStateToProps = state => {
    return {
        extraExperiences: state.myProfileReducer.extraExperiences
    };
};


export default connect(mapStateToProps)(ExtraExperiences)