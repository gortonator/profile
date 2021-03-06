import React, {Component} from 'react';
import {connect} from 'react-redux';

class Academic extends Component {


    render() {

        var listItems = this.props.courses.map((course) =>
            <li key={course.courseId}>
                {course.courseId + ': ' + course.courseName}
                <br/>
                {course.Description}
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