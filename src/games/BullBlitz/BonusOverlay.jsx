import { useEffect, useState } from "react";

export default function BonusOverlay({ bonusGrid, coins, spins, onSpin, showBullSplash}) {
  const [showSplash, setShowSplash] = useState(true); // show splash initially
  const totalCoins = coins.reduce((sum, c) => sum + c, 0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // hide splash after 5 seconds
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Splash screen for first 5 seconds
  if (showSplash || showBullSplash) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <h1 className="text-6xl sm:text-8xl font-bold text-yellow-400 animate-pulse">
          🐂 BULL BLITZ
        </h1>
      </div>
    );
  }

  // Normal bonus overlay UI
  return (
    <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-4">
      <div className="bg-slate-900 p-6 rounded-xl text-white text-center w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">
          🐂 BULL BLITZ BONUS
        </h2>

        <p className="mb-4 text-lg">Spins Left: {spins}</p>

        <p className="mb-4 text-xl font-bold text-yellow-300">
          Total Coins: ${totalCoins}
        </p>

        {/* Bonus Grid */}
        <div className="flex gap-2 justify-center mb-6">
          {bonusGrid.map((reel, i) => (
            <div key={i} className="flex flex-col gap-2">
              {reel.map((symbol, j) => (
                <div
                  key={j}
                  className={`h-16 w-16 flex items-center justify-center rounded-lg font-bold
                    ${
                      symbol === "BULL"
                        ? "bg-red-600 text-white"
                        : symbol === null
                        ? "bg-slate-700/50"
                        : "bg-slate-800 text-white"
                    }`}
                >
                  {symbol || ""}
                </div>
              ))}
            </div>
          ))}
        </div>

        <button
          onClick={onSpin}
          className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg font-bold text-lg"
        >
          RE-SPIN
        </button>
      </div>
    </div>
  );
}
