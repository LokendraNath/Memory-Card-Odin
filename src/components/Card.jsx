export const Card = ({ handleCardClick, pokemonData }) => {
  return (
    <>
      {pokemonData.map((poke) => (
        <div
          onClick={() => handleCardClick(poke.id)}
          key={poke.id}
          className="card border-2 flex flex-col items-center w-full py-5 px-3 rounded-xl hover:scale-105 transition-transform duration-300 hover:shadow-[0px_0px_41px_-5px_#1f1f23] active:scale-95"
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
