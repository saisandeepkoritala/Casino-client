import { useSelector } from "react-redux";

const games = [
  "Roulette",
  "Casino Dice",
  "Keno",
  "Black Jack",
  "Mines",
  "Poker",
  "Color Prediction",
  "Crazy Times",
  "Dream Catcher",
  "Andar Bahar"
];


export default function Games() {
  const isDarkMode = useSelector((state) => state.user.isDarkMode);
  const classNames = isDarkMode ? `bg-black text-white` : "bg-white text-[#0b1220]";
  return (
    <section className={`${classNames} px-16 py-20`}>
      <h2 className="text-4xl font-bold text-center mb-4">
        Our Awesome Games
      </h2>
      <p className="text-center text-gray-400 mb-12">
        All games are demo-based and for entertainment only.
      </p>

      <div className="flex flex-wrap gap-8 justify-center">
        {games.map((game) => (
          <div
            key={game}
            className="bg-[#0b1d3a] rounded-xl p-4 hover:scale-105 transition w-72 sm:w-96"
          >
            <div className="h-32 bg-gray-700 rounded mb-4" />

            <h3 className="text-lg font-semibold mb-3">{game}</h3>

            <div className="flex gap-3">
              <button className="bg-yellow-400 text-black px-3 py-1 rounded text-sm">
                Play Now
              </button>
              <button className="border border-yellow-400 px-3 py-1 rounded text-sm">
                Demo
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
