import React from "react";
import Testimonials from "./Components/Testimonials";
import reviews from "./data";

const App = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center bg-gray-200">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-1 w-1/5 mt-2 mx-auto"></div>
      </div>
      <Testimonials reviews={reviews} />
    </div>
  );
};

export default App;
