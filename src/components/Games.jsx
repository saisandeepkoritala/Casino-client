import { useSelector } from "react-redux";

const games = [
  "Bull Blitz",
  "Roulette",
  "Coin Toss",
  // "Black Jack",
  // "Color Prediction",
  // "High Low",
];

import Bull from '../payments/BullBlitz.webp';
import Roulette from '../payments/Roulette.jpg';
import CoinToss from '../payments/Coin.jpg';
import BlackJack from '../payments/BlackJack.jpg';
import Color from '../payments/Color.jpg';
import HighLow from '../payments/HighLow.jpg';

const gameImages = {
  "Bull Blitz": Bull,
  "Roulette": Roulette,
  "Coin Toss": CoinToss,
  "Black Jack": BlackJack,
  "Color Prediction": Color,
  "High Low": HighLow,
}

export default function Games() {
  const isDarkMode = useSelector((state) => state.user.isDarkMode);
  const classNames = isDarkMode ? `bg-black text-white` : "bg-white text-[#0b1220]";

  const moveUserToGame = (game) => {
    switch (game) {
      case "Bull Blitz":
        window.location.href = "/bullblitz";
        break;
      case "Roulette":
        window.location.href = "/roulette";
        break;
      case "Coin Toss":
        window.location.href = "/coin";
        break;
      case "Black Jack":
        window.location.href = "/blackjack";
        break;
      case "Color Prediction":
        window.location.href = "/color-prediction";
        break;
      case "High Low":
        window.location.href = "/high-low";
        break;
      default:
        console.log("Game not supported");
    }
  };
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
            className={`${classNames} rounded-xl p-4 hover:scale-105 transition w-72 sm:w-96`}
          >
            <div className={`h-48 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded mb-4`} >
              <img src={gameImages[game] || "https://via.placeholder.com/300x200"} alt= "image of game" className="object-cover w-full h-full" />
            </div>  

            <h3 className="text-lg font-semibold mb-3">{game}</h3>

            <div className="flex gap-3">
              <button className={`${classNames} bg-yellow-400 px-3 py-1 rounded text-sm`} onClick={() => moveUserToGame(game)}>
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
