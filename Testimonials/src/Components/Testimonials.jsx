import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PropTypes from 'prop-types'

const Testimonials = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    setIndex(index - 1 < 0 ? reviews.length - 1 : index - 1);
  };

  const rightShiftHandler = () => {
    setIndex(index + 1 >= reviews.length ? 0 : index + 1);
  };

  const surpriseShiftHandler = () => {
    let randIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randIndex);
  };

  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]} />
      <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto text-center">
        <button className="cursor-pointer hover:text-violet-500" onClick={leftShiftHandler}>
          <FiChevronLeft />
        </button>
        <button className="cursor-pointer hover:text-violet-500" onClick={rightShiftHandler}>
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-6">
        <button
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
          onClick={surpriseShiftHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

    Testimonials.propTypes = {
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }
export default Testimonials;
