import React, {Component} from 'react';
import {connect} from 'react-redux';

class Coop extends Component {

    renderCoop() {
        return this.props.workExperiences.map(coop => {
            return (
                <div key={coop.WorkExperienceId}>
                    <h2 className="companyName"> {coop.CompanyName} </h2>
                    <p className="grayContent"> {coop.Title} </p>
                    <p className="grayContent"> {coop.StartDate} ~ {coop.EndDate} </p>
                    <p className="grayContent"> Worked as {coop.CurrentJob} </p>
                    <hr/>
                </div>
            );
        });
    }

    render() {
        return (
            <div><p className="subtitle"> COOP </p>
                <hr/>
                { this.renderCoop() }
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        workExperiences: state.myProfileReducer.workExperiences,
    };
};

export default connect(mapStateToProps)(Coop)