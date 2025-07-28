import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <main className="bg-gradient-to-t from-indigo-600 to-blue-700  min-h-screen py-10">
      <h1 className="text-center text-lg font-semibold tracking-wider">
        Get points by clicking on an image but don't click on any more than
        once!
      </h1>

      <div className="px-30 mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <Card />
      </div>
    </main>
  );
};

export default Main;
