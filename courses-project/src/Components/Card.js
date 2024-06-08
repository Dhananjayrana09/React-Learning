import React from "react";
import { FcLike } from "react-icons/fc"; // Update the import to include react-icons

const Card = ({ course }) => {
  return (
    <div>
      <div>
        <img src={course.image.url} alt={course.title}></img>
      </div>
      <div>
        <button>
          <FcLike fontSize="1.75rem" />
        </button>
      </div>
      <div>
        <p>{course.title}</p>
        <p>{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
