import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [userPicks, setUserPicks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function suffleCard() {
    const suffle = [...pokemon];
    for (let i = suffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [suffle[i], suffle[j]] = [suffle[j], suffle[i]];
    }
    setPokemon(suffle);
  }

  function handleCardClick(pokemonId) {
    const alreadyPicks = userPicks.some((val) => val.id === pokemonId);

    if (alreadyPicks) {
      setScore(0);
      setUserPicks([]);
    } else {
      const matchPoke = pokemon.find((p) => p.id === pokemonId);
      const newPicks = [...userPicks, matchPoke];
      setUserPicks(newPicks);
      setScore((prev) => prev + 1);

      if (score + 1 > highScore) {
        setHighScore((prev) => prev + 1);
      }
    }
    suffleCard();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");
        const data = await res.json();

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
        setIsLoading(false);
        setPokemon(pokeDetails);
      } catch (err) {
        console.error("Filled To Featch Data", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="text-white bg-gradient-to-t from-indigo-600 to-blue-700 pb-5">
      <Header score={score} highScore={highScore} />
      <Main
        handleCardClick={handleCardClick}
        pokemonData={pokemon}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  );
}

export default App;
