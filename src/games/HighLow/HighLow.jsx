import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Wheel } from "./Wheel";
import { Pointer } from "./Pointer";
import { SelectionInput } from "./SelectionInput";

const rouletteNumbers = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5,
  24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26
];

const HighLow = () => {
  const [game, setGame] = useState("evenOdd");
  const [selection, setSelection] = useState("");
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const [win, setWin] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const size = 380;

  const spinWheel = () => {
    if (!selection) {
      toast.error("Place your bet first!");
      return;
    }
    if (isSpinning) return;

    setIsSpinning(true);
    setShowResult(false);
    
    const extraSpins = Math.floor(Math.random() * 3600) + 2000;
    const newRotation = rotation + extraSpins;
    setRotation(newRotation);

    const actualStopAngle = newRotation % 360;
    const anglePerNumber = 360 / rouletteNumbers.length;
    let index = Math.floor((360 - actualStopAngle + anglePerNumber / 2) / anglePerNumber) % rouletteNumbers.length;
    const landed = rouletteNumbers[index];

    setTimeout(() => {
      setResult(landed);
      setShowResult(true);
      setIsSpinning(false);
      
      // Win Logic
      let isWinner = false;
      if (game === "evenOdd") {
        if (landed !== 0) isWinner = selection === (landed % 2 === 0 ? "even" : "odd");
      } else if (game === "redBlack") {
        const redNumbers = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
        const color = landed === 0 ? "green" : redNumbers.includes(landed) ? "red" : "black";
        isWinner = selection === color;
      } else if (game === "number") {
        isWinner = parseInt(selection) === landed;
      }
      setWin(isWinner);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-4 font-sans text-white overflow-hidden">
      <Toaster position="top-center" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#000_100%)] z-0" />

      <div className="z-10 flex flex-col items-center gap-8 w-full max-w-md">
        <h1 className="text-4xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 drop-shadow-md">
          ROULETTE BLITZ
        </h1>

        {/* Game Mode Toggler */}
        <div className="flex bg-neutral-900 p-1 rounded-xl border border-neutral-800 shadow-inner w-full">
          {["evenOdd", "redBlack", "number"].map((mode) => (
            <button
              key={mode}
              onClick={() => { if(!isSpinning) { setGame(mode); setSelection(""); setShowResult(false); }}}
              className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${
                game === mode ? "bg-yellow-500 text-black shadow-lg" : "text-neutral-500 hover:text-white"
              }`}
            >
              {mode.replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>

        {/* User Input Section */}
        <div className="h-16 flex items-center justify-center">
          <SelectionInput game={game} selection={selection} setSelection={setSelection} disabled={isSpinning} />
        </div>

        {/* The Wheel Visual */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-yellow-500/10 rounded-full blur-2xl group-hover:bg-yellow-500/20 transition-all" />
          <Pointer />
          <Wheel numbers={rouletteNumbers} rotation={rotation} size={size} />
        </div>

        {/* Spin Button */}
        <button
          disabled={isSpinning}
          onClick={spinWheel}
          className="w-full py-4 bg-gradient-to-t from-yellow-600 to-yellow-400 disabled:from-neutral-800 disabled:to-neutral-900 text-black font-black text-xl rounded-2xl shadow-[0_6px_0_rgb(180,83,9)] active:shadow-none active:translate-y-1 transition-all disabled:translate-y-1 disabled:shadow-none uppercase tracking-widest"
        >
          {isSpinning ? "Spinning..." : "Place Bet & Spin"}
        </button>

        {/* Result Message */}
        <div className="h-12 flex items-center justify-center">
          {showResult && (
            <div className={`text-2xl font-black animate-bounce ${win ? "text-green-400" : "text-red-500"}`}>
              {result} — {win ? "YOU WIN!" : "TRY AGAIN"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HighLow;