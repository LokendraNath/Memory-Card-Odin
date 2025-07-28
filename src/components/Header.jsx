import React from "react";

export const Header = () => {
  return (
    <header className="bg-gradient-to-t from-blue-700 to-indigo-600 flex h-20 items-center justify-between px-20 text-white">
      <h1 className=" text-4xl font-mono tracking-wider">Memory Card</h1>
      <div>
        <p className="text-xl font-bold tracking-wide">Score: 0</p>
        <p className="text-xl font-bold tracking-wide">Best Score: 0</p>
      </div>
    </header>
  );
};

export default Header;
