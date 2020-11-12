import React from 'react';

const Total = ({ total }) => {
  //looping through total and setting the sum to start at zero and adding the exercises to the sum
  const totalAmount = total.reduce((sumExercises, current) => {
    return sumExercises + current.exercises;
  }, 0);
  return (
    <div>
      <p>
        <b>Number of exercises: {totalAmount}</b>
      </p>
    </div>
  );
};

export default Total;
