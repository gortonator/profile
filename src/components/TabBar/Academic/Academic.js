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
            <div>
                <SubTitle1>MY COURSES</SubTitle1>
                <List>{listItems}</List>
            </div>
        )
    }
}

const SubTitle1 = styled.h5`
    font-family: 'Khand', sans-serif;
    font-size: 2em;
    font-weight: 400;
    color: #e78885;
    `

const List = styled.li`
    font-family: "Helvetica Neue";
    font-size: 1.5em;
    font-weight: 100;
    color: #8c8c8c;
    `

export default Academic