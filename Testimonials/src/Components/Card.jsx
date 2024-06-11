import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import PropTypes from 'prop-types'

const Card = ({ review }) => {
  return (
    <div className="flex flex-col items-center md:relative p-6 bg-white shadow-lg rounded-lg">
      <div className="relative -top-20 z-10 mx-auto w-36 h-36">
        <img
          src={review.image}
          alt={`${review.name}'s profile`}
          className="rounded-full w-full h-full object-cover z-20"
        />
        <div className="w-full h-full bg-violet-500 rounded-full absolute top-[-6px] left-[10px] z-[-10]"></div>
      </div>

      <div className="text-center mt-[-4rem]">
        <p className="font-bold text-2xl capitalize leading-6">{review.name}</p>
      </div>

      <div className="text-center mt-2">
        <p className="text-violet-300 text-sm uppercase">{review.job}</p>
      </div>

      <div className="text-violet-400 mx-auto mt-4">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-slate-500">{review.text}</div>

      <div className="text-violet-400 mx-auto mt-4">
        <FaQuoteRight />
      </div>
    </div>
  );
};


Card.propTypes = {
    review: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  }

export default Card;
