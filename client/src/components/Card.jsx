import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/cardBook.png";

const Card = ({ item, isCarousel = false }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col mx-auto ${
        isCarousel ? "w-[21rem] mx-2 h-[450px]" : "h-full w-full"
      } bg-white dark:bg-slate-900 dark:text-white shadow-xl border rounded-lg hover:scale-105 hover:cursor-pointer duration-300`}
    >
      <figure className={`flex-shrink-0 ${isCarousel ? "h-48" : "h-60"}`}>
        <img
          src={heroImage}
          alt="Book"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex-1 p-4 flex flex-col">
        <h2 className="text-xl font-bold">{item.title}</h2>
        <div className="badge badge-secondary bg-primary-red text-white mb-2">
          {item.category}
        </div>
        <p className="flex-1 mb-4">{item.description}</p>
        <h2 className="text-lg font-bold">{item.price}</h2>
        <div className="mt-auto flex gap-2">
          <button
            className="bg-primary-red flex-1 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
            onClick={() => alert("Buy Now functionality to be implemented")}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
