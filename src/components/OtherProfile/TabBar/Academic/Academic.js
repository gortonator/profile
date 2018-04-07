import React, {Component} from 'react';
import styled from 'styled-components'
import {connect} from 'react-redux';
import {fetchMyCourses} from '../../../../actions/myProfileActions'
import {bindActionCreators} from 'redux';


class Academic extends Component {


    render() {

        var listItems = this.props.courses.map((course) =>
            <li key={course.courseName}>
                {course.courseId + ': ' + course.courseName}
                <br/>
            </li>
        );

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
        courses: state.myProfileReducer.Courses
    };
};



export default connect(mapStateToProps)(Academic)