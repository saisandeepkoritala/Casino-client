import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Wheel } from "./Wheel";
import { Pointer } from "./Pointer";
import { SelectionInput } from "./SelectionInput";

const rouletteNumbers = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6,
  27, 13, 36, 11, 30, 8, 23, 10, 5,
  24, 16, 33, 1, 20, 14, 31, 9, 22,
  18, 29, 7, 28, 12, 35, 3, 26
];

const HighLow = () => {
  const [game, setGame] = useState("evenOdd");
  const [selection, setSelection] = useState("");
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const [win, setWin] = useState(null);
  const [showResult,setShowResult] =  useState(false);
  const size = 400;

  const spinWheel = () => {
    if (!selection) {
      toast.error("Please make a selection before spinning!");
      return;
    }

    setShowResult(false);
    const spins = Math.floor(Math.random() * 5000) + 3000;
    setRotation(prev => prev + spins);

    const finalRotation = (rotation + spins) % 360;
    const anglePerNumber = 360 / rouletteNumbers.length;
    let index = Math.floor((360 - finalRotation + anglePerNumber / 2) / anglePerNumber) % rouletteNumbers.length;
    const landed = rouletteNumbers[index];

    setTimeout(()=>{
        setResult(landed);
        setShowResult(true);
    },4200)
    
    if (game === "evenOdd") {
      if (landed === 0) setWin(false);
      else setWin(selection === (landed % 2 === 0 ? "even" : "odd"));
    } else if (game === "redBlack") {
      const redNumbers = [1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36];
      const color = landed === 0 ? "green" : redNumbers.includes(landed) ? "red" : "black";
      setWin(selection === color);
    } else if (game === "number") {
      if (parseInt(selection) < 0 || parseInt(selection) > 36) {
        toast.error("Number must be between 0 and 36");
        setWin(false);
        return;
      }
      setWin(parseInt(selection) === landed);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 h-screen bg-black justify-center text-white">
      <Toaster position="top-center" />

      {/* Game selection */}
      <div className="flex gap-4">
        <button onClick={() => { setGame("evenOdd"); setSelection(""); }} className={`px-3 py-1 rounded ${game==="evenOdd"?"bg-yellow-400 text-black":"bg-gray-700"}`}>Even/Odd</button>
        <button onClick={() => { setGame("redBlack"); setSelection(""); }} className={`px-3 py-1 rounded ${game==="redBlack"?"bg-yellow-400 text-black":"bg-gray-700"}`}>Red/Black</button>
        <button onClick={() => { setGame("number"); setSelection(""); }} className={`px-3 py-1 rounded ${game==="number"?"bg-yellow-400 text-black":"bg-gray-700"}`}>Number</button>
      </div>

      {/* User selection input */}
      <SelectionInput game={game} selection={selection} setSelection={setSelection} />

      {/* Wheel */}
      <Wheel numbers={rouletteNumbers} rotation={rotation} size={size} />

      {/* Pointer */}
      <Pointer />

      {/* Spin */}
      <button className="px-6 py-2 bg-yellow-400 rounded-lg font-bold text-black" onClick={spinWheel}>
        SPIN
      </button>

      {showResult && (
        <div className="mt-4 text-xl">
          Landed: {result} - You {win ? "WIN!" : "LOSE!"}
        </div>
      )}
    </div>
  );
};


export default HighLow;
