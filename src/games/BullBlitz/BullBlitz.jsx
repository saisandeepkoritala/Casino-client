import { useState, useEffect } from "react";
import SlotGrid from "./SlotGrid";
import BalancePanel from "./BalancePanel";
import AnimatedNumber from "./AnimatedNumber";
import { generateGrid, getRandomSymbolInBonus, countSymbol } from "./Utils";

export default function BullBlitz() {
  const [grid, setGrid] = useState(generateGrid());
  const [balance, setBalance] = useState(2000);
  const [winnings, setWinnings] = useState(0);
  const [buttonDisable, setButtonDisable] = useState(false);
  const bet = 25;

  // Bonus state
  const [bonus, setBonus] = useState(false);
  const [bonusSpins, setBonusSpins] = useState(3);
  const [bonusGrid, setBonusGrid] = useState([]); 
  const [lockedPositions, setLockedPositions] = useState([]); 
  const [bonusTotal, setBonusTotal] = useState(0);

  /**
   * Main Game Spin Logic
   */
  const spin = () => {
    if (balance < bet) return;

    setButtonDisable(true);
    setBalance((b) => b - bet);
    
    const newGrid = generateGrid();
    setGrid(newGrid);

    const bullCount = countSymbol(newGrid, "BULL");

    // Check for Bonus Trigger (5 or more Bulls)
    if (bullCount >= 5) {
      setTimeout(() => {
        // Setup initial bonus state
        const initialLocked = newGrid.map((reel) => reel.map((s) => s === "BULL"));
        const initialBonusGrid = newGrid.map((reel) =>
          reel.map((s) => (s === "BULL" ? (Math.floor(Math.random() * 5) + 1) * 10 : null))
        );
        const initialTotal = initialBonusGrid.flat().filter(Boolean).reduce((a, b) => a + b, 0);

        setLockedPositions(initialLocked);
        setBonusGrid(initialBonusGrid);
        setBonusTotal(initialTotal);
        setBonusSpins(3);
        setBonus(true);
      }, 1500); // Short delay to see the winning symbols land
    }

    setTimeout(() => setButtonDisable(false), 1000);
  };

  /**
   * Corrected Bonus Spin Logic
   */
  const bonusSpin = () => {
    let nextGrid = bonusGrid.map(reel => [...reel]);
    let nextLocked = lockedPositions.map(reel => [...reel]);
    let newBullsFound = false;
    let newBullCoins = [];

    // 1. "Spin" only the unlocked slots
    for (let i = 0; i < nextGrid.length; i++) {
      for (let j = 0; j < nextGrid[i].length; j++) {
        if (!nextLocked[i][j]) {
          const symbol = getRandomSymbolInBonus();
          if (symbol === "BULL") {
            const coinValue = (Math.floor(Math.random() * 5) + 1) * 10;
            nextGrid[i][j] = coinValue;
            nextLocked[i][j] = true;
            newBullsFound = true;
            newBullCoins.push(coinValue);
          } else {
            nextGrid[i][j] = null; 
          }
        }
      }
    }

    // 2. Handle Compounding Math & Spin Count
    if (newBullsFound) {
      let updatedTotal = bonusTotal;
      newBullCoins.forEach((coin) => {
        // Compound Rule: Total = (OldTotal * 2) + NewCoin
        updatedTotal = updatedTotal + updatedTotal + coin;
      });

      setBonusGrid(nextGrid);
      setLockedPositions(nextLocked);
      setBonusTotal(updatedTotal);
      setBonusSpins(3); // Reset to 3
    } else {
      const remainingSpins = bonusSpins - 1;
      if (remainingSpins <= 0) {
        // End Bonus
        setWinnings((w) => w + bonusTotal);
        setTimeout(() => {
          setBonus(false);
          setBonusGrid([]);
          setLockedPositions([]);
          setBonusTotal(0);
        }, 1000);
      } else {
        setBonusSpins(remainingSpins);
      }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center gap-6 font-sans overflow-hidden text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#451a03_0%,_#000_70%)] opacity-40 -z-10" />

      {/* Header */}
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-yellow-500 to-amber-700 drop-shadow-xl">
          BULL BLITZ
        </h1>
        {bonus && (
          <div className="mt-2 animate-bounce">
            <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(220,38,38,0.8)]">
              Blitz Spins Active
            </span>
          </div>
        )}
      </div>

      {/* Stats Panel */}
      <div className="w-full max-w-2xl px-4">
        <div className="bg-neutral-900/80 border border-neutral-800 backdrop-blur-md p-4 rounded-2xl shadow-2xl flex justify-around items-center">
          <BalancePanel balance={balance} bet={bet} winnings={winnings} />
        </div>
      </div>

      {/* Game Grid Container */}
      <div className={`
        relative p-4 rounded-3xl transition-all duration-700
        ${bonus ? 'bg-amber-900/20 border-4 border-yellow-500 shadow-[0_0_50px_rgba(245,158,11,0.3)]' : 'bg-neutral-900 border-4 border-neutral-800'}
      `}>
        {bonus ? <SlotGrid grid={bonusGrid} isBonus={true} /> : <SlotGrid grid={grid} />}
      </div>

      {/* Controls */}
      {/* Control Deck Container */}
      <div className="w-full max-w-4xl px-6 py-8 mt-4 bg-neutral-900/50 border-t border-neutral-800 backdrop-blur-sm">
        <div className="flex flex-row items-center justify-center gap-8 md:gap-16">
          
          {/* Left Side: Win/Bonus Display */}
        <div className={`
        flex flex-col items-center justify-center min-w-[180px] md:min-w-[240px] p-4 rounded-xl border-2 transition-all duration-500
        ${bonus ? 'bg-amber-950/30 border-yellow-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : 'bg-black border-neutral-700'}
      `}>
        <p className="text-neutral-500 text-[10px] uppercase font-bold tracking-widest mb-1">
          {bonus ? "Bonus Blitz Total" : "Recent Win"}
        </p>
        <p className={`font-mono font-black ${bonus ? 'text-yellow-400 text-3xl' : 'text-white text-2xl'}`}>
          {/* Use the animated component here */}
          <AnimatedNumber value={bonus ? bonusTotal : winnings} />
        </p>
      </div>

    {/* Right Side: Interaction Area */}
    <div className="flex flex-col items-center justify-center min-h-[100px]">
      {!bonus ? (
        <button
          onClick={spin}
          disabled={buttonDisable}
          className="group relative px-12 py-5 bg-gradient-to-t from-yellow-600 to-yellow-400 disabled:from-neutral-800 disabled:to-neutral-900 disabled:text-neutral-600 text-black font-black text-2xl md:text-3xl rounded-full shadow-[0_6px_0_rgb(180,83,9)] active:shadow-none active:translate-y-1 transition-all"
        >
          SPIN
        </button>
      ) : (
        <div className="flex flex-col items-center gap-3">
          {/* Spin Count Indicators */}
          <div className="flex gap-2 mb-1">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i} 
                className={`w-4 h-4 rounded-full border border-yellow-500 transition-all duration-300 ${i < bonusSpins ? 'bg-yellow-500 shadow-[0_0_8px_#fbbf24]' : 'bg-transparent'}`}
              />
            ))}
          </div>
          <button
            onClick={bonusSpin}
            className="px-10 py-3 bg-red-600 hover:bg-red-500 text-white font-black text-lg rounded-xl shadow-[0_4px_0_rgb(153,27,27)] active:shadow-none active:translate-y-1 transition-all uppercase tracking-tight"
          >
            Next Blitz
          </button>
        </div>
      )}
    </div>

  </div>
</div>

      {/* CSS Overrides */}
      <style jsx>{`
        @keyframes bull-pop {
          0% { transform: scale(0.8); }
          50% { transform: scale(1.1); filter: brightness(1.5); }
          100% { transform: scale(1); }
        }
        .bull-animate { animation: bull-pop 0.4s ease-out; }
      `}</style>
    </div>
  );
}