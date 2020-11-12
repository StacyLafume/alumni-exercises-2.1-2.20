import React from 'react';

const Content = ({ course }) => {
  const contents = () =>
    //mapping throught the course and using the unique id's to grab the content name/exercises
    course.map(content => (
      <p key={content.id}>
        {content.name}: {content.exercises}
      </p>
    ));
  //returning the contents
  return (
    <div>
      {contents()}
    </div>
  )
};
export default Content;
