import { useEffect, useState } from "react";

export const Card = () => {
  const [pokemon, setPokemon] = useState([]);
  function handleCardClick() {
    console.log("Card Click");
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
      const data = await res.json();
      console.log(data);

      const pokeDetails = await Promise.all(
        data.results.map(async (poke) => {
          const res = await fetch(poke.url); // nested API call
          const details = await res.json();
          return {
            id: details.id,
            name: poke.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`, // final image URL
          };
        })
      );
      setPokemon(pokeDetails);
    };
    fetchData();
  }, []);

  return (
    <>
      {pokemon.map((poke) => (
        <div
          onClick={handleCardClick}
          key={poke.id}
          className="card border-2 flex flex-col items-center w-full py-5 px-3 rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-[0px_0px_41px_-5px_#1f1f23]"
        >
          <img
            className="w-full object-cover mb-5"
            src={poke.image}
            alt={poke.name}
          />
          <h3 className="font-bold text-xl tracking-wide">{poke.name}</h3>
        </div>
      ))}
    </>
  );
};

export default Card;
