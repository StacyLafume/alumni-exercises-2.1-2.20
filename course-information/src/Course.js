import React from 'react'
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = (props) => {
    //mapping through course map and creating course container for every part by using the ID as key
    const courseMap = () => props.course.map(part => (
        <div key={part.id}>{<CourseContainer course={part} />}</div>
    ));
    //returning a fragment of the part
    return <>{courseMap()}</>;

};


const CourseContainer = ({course}) => {
    return (
        <div>
            <Header
                course={course}
            />
            <Content
                course={course.parts}
            />
            <Total
                total={course.parts}
            />
        </div>)
}

export default Course;
