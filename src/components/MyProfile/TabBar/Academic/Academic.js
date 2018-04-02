import React, {Component} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';




class Academic extends Component {

    render() {

        var listItems = this.props.courses.map((course) =>
            <li key={course.CourseName}>
                {course.CourseName}
                <br/>
                {course.Description}
            </li>
        );

        console.log("yudong courses", this.props.courses);
        return (
            <div className="wrapper">
                <p className="tab-content-subtitle">MY COURSES</p>
                <ul className="grayContent">{listItems}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        courses: state.myProfileReducer.courses
    };
};


export default connect(mapStateToProps)(Academic)