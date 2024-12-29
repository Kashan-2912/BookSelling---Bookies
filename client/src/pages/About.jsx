import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-20 dark:bg-slate-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-primary-red mb-8">
          About Bookies
        </h1>
        <p className="text-lg mb-6">
          Welcome to Bookies, your ultimate destination for discovering and
          exploring a wide range of books. We are dedicated to providing you
          with the best selection of books across various genres, ensuring
          quality, diversity, and uniqueness.
        </p>
        <p className="text-lg mb-6">
          Established in 2021, Bookies was born out of a passion for reading and
          a desire to connect book lovers with their next great read. Our
          mission is to make finding your next book as enjoyable and effortless
          as possible.
        </p>
        <p className="text-lg mb-6">
          We hope you enjoy browsing our collection and find books that inspire
          and captivate you. If you have any questions or feedback, please feel
          free to reach out to us{" "}
          <Link to="/contact" className="text-blue-500 ml-1 hover:underline">
            here
          </Link>
          .
        </p>
        <p className="text-xl font-semibold text-center text-primary-red mb-6">
          Happy Reading! <br /> The Bookies Team
        </p>
      </div>
    </section>
  );
};

export default About;
