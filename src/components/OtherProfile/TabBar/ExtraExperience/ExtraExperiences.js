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
                    <div key={item.extraExperienceId}>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="95%"><h2 className="companyName">{item.companyName}</h2></td>
                            </tr>
                            <tr><td><p className="grayContent">{item.title}</p></td></tr>
                            <tr><td><p className="grayContent">{item.startDate + " - " + item.endDate}</p></td></tr>
                            <tr><td><TextArea className="grayContent">{item.description}</TextArea></td></tr>
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
        extraExperiences: state.otherProfileReducer.ExtraExperiences
    };
};


export default connect(mapStateToProps)(ExtraExperiences)