import React from "react";
import Card from "./Card";

const Main = ({ handleCardClick, pokemonData, isLoading }) => {
  return (
    <main className=" min-h-screen py-10">
      <h1 className="text-center text-lg font-semibold tracking-wider">
        Get points by clicking on an image but don't click on any more than
        once!
      </h1>

      {isLoading && <h1 className="text-3xl text-center mt-20">Loading ....</h1>}

      <div className="px-30 mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <Card handleCardClick={handleCardClick} pokemonData={pokemonData} />
      </div>
    </main>
  );
};

export default Main;
