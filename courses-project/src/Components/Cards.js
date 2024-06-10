import Card from "./Card";
import React, { useState } from "react";

const Cards = (props) => {
  console.log(props.category);
  console.log(props.courses);

  const category = props.category;
  const [likedCourses, setLikedCourses] = useState([]);

  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(props.courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return props.courses[category] || [];
    }
  }

  const coursesToShow = getCourses();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {coursesToShow.length > 0 ? (
        coursesToShow.map((course) => (
          <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
        ))
      ) : (
        <p>No courses available.</p>
      )}
    </div>
  );
};

export default Cards;
