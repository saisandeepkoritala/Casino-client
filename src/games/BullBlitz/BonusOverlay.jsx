import { useEffect, useState } from "react";

export default function BonusOverlay({
  bonusGrid,
  spins,
  onSpin,
  showBullSplash,
  bonusTotal, // new prop for compounded bonus total
}) {
  const [displayedTotal, setDisplayedTotal] = useState(0);

  // Animate bonus total
  useEffect(() => {
    let start = displayedTotal;
    const end = bonusTotal || 0;
    if (start === end) return;

    const increment = Math.ceil((end - start) / 50); // speed of animation
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setDisplayedTotal(start);
    }, 50);

    return () => clearInterval(interval);
  }, [bonusTotal]);

  // Show splash for new bull
  if (showBullSplash) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <h1 className="text-6xl sm:text-8xl font-bold text-yellow-400 animate-pulse">
          🐂 BULL BLITZ
        </h1>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 p-4">
      <div className="bg-slate-900 p-6 rounded-xl text-white text-center w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-yellow-400">
          🐂 BULL BLITZ BONUS
        </h2>

        {/* Spins Left */}
        <p className="mb-4 text-lg">Spins Left: {spins}</p>

        {/* Animated Total Coins */}
        <p className="mb-4 text-xl font-bold text-yellow-300">
          Total Coins: ${displayedTotal}
        </p>

        {/* Bonus Grid */}
        <div className="flex gap-2 justify-center mb-6">
          {bonusGrid.map((reel, i) => (
            <div key={i} className="flex flex-col gap-2">
              {reel.map((symbol, j) => (
                <div
                  key={j}
                  className={`h-16 w-16 flex items-center justify-center rounded-lg font-bold
                    ${typeof symbol === "number" ? 
                      "bg-red-600 text-white" : "bg-slate-700/50 text-slate-700"}`}
                >
                  {typeof symbol === "number" ? `$${symbol}` : symbol}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Re-spin Button */}
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
