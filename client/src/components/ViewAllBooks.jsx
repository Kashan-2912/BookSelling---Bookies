import React from "react";
import { Link } from "react-router-dom";

const ViewAllBooks = () => {
  return (
    <section className="m-auto w-96 my-10 px-6">
      <Link
        to="/books"
        className="block w-full bg-primary-red text-white text-xl font-semibold text-center py-4 px-6 rounded-xl hover:bg-red-600 transition-all duration-300"
      >
        View All Books
      </Link>
    </section>
  );
};

export default ViewAllBooks;
