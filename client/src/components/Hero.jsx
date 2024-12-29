import React, { useState } from "react";
import HeroImage from "../assets/books.png";

const Hero = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="text-gray-600 bg-white dark:bg-slate-900 dark:text-white body-font pt-12">
      <div className="container mx-auto flex px-20 py-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
            Where Every Book
            <br className="hidden lg:inline-block" />
            <span className="text-primary-red font-bold">
              Finds Its Reader!
            </span>
          </h1>
          <p className="mb-6 leading-relaxed">
            Connecting readers with stories that resonate. Find the book that
            speaks to you. Discover a world of literature where every page turns
            into a journey. Let the perfect story find its way to your heart.
          </p>
          <input
            className="bg-white outline outline-primary-red outline-2 mb-6 border text-black w-full rounded-md shadow-lg py-1 px-2"
            type="text"
            placeholder="email"
            name="email"
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-primary-red border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded-md text-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={HeroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
