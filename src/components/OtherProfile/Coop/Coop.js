import React, {Component} from 'react';
import {connect} from 'react-redux';

class Coop extends Component {

    renderCoop() {
        return this.props.workExperiences.map(coop => {
            return (
                <div key={coop.WorkExperienceId}>
                    <h2 className="companyName"> {coop.companyName} </h2>
                    <p className="grayContent"> {coop.title} </p>
                    <p className="grayContent"> {coop.startDate} ~ {coop.endDate} </p>
                    <p className="grayContent"> {coop.description} </p>
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
        workExperiences: state.myProfileReducer.WorkExperiences,
    };
};

export default connect(mapStateToProps)(Coop)