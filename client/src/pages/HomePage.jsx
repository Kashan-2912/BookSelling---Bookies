import React from "react";
import Hero from "../components/Hero";
import Caraousel from "../components/Caraousel";
import ViewAllBooks from "../components/ViewAllBooks";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Caraousel />
      <div className="flex dark:bg-slate-900  items-center justify-center">
        <ViewAllBooks />
      </div>
    </>
  );
};

export default HomePage;
