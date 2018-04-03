import React, {Component} from 'react';
import styled from "styled-components";
import {connect} from "react-redux";


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNew: false,
            edit:false,
            editItem: null,
            index: 999999,
            projects: this.props.projects
        };
    }

    render() {
        return (
            <div className="wrapper">
                <table width="100%">
                    <tbody>
                    <tr>
                        <td width="90%">
                            <p className="tab-content-subtitle">MY PROJECTS</p>
                        </td>
                    </tr>
                    </tbody>
                </table>

                {this.state.projects.map(item => (
                    <div key={item.id}>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="95%">
                                    <h2 className="companyName">{item.ProjectName}</h2>
                                </td>
                            </tr>
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
        projects: state.myProfileReducer.projects
    };
};


export default connect(mapStateToProps)(Projects)