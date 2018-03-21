import React, {Component} from 'react';
import styled from 'styled-components'

const courses = ['Programming Design Paradigm', 'Fundamentals of Computer Science', 'Discrete Structures',
    'Computer System/Algorithms', 'Object Oriented Design/Java Programming', 'Algorithms',
    'Computer Systems', 'Mobile Development', 'Managing Software Development', 'Advanced Software Development'];

const listItems = courses.map((course) =>
        <li key={course}>
            {course}
        </li>
    );

    class Academic extends Component {

    render() {
        return (
            <div className="wrapper">
                <h5 className="tab-content-subtitle">MY COURSES</h5>
                <ul className="grayContent">{listItems}</ul>
            </div>
        )
    }
}

export default Academic