export const SelectionInput = ({ game, selection, setSelection, disabled }) => {
  const baseBtn = "px-6 py-2 rounded-xl font-black text-sm transition-all border-2 uppercase ";
  
  if (game === "evenOdd") {
    return (
      <div className="flex gap-4">
        <button 
          disabled={disabled}
          onClick={() => setSelection("even")} 
          className={`${baseBtn} ${selection === "even" ? "bg-white text-black border-white shadow-[0_0_15px_white]" : "border-neutral-700 text-neutral-500"}`}
        >Even</button>
        <button 
          disabled={disabled}
          onClick={() => setSelection("odd")} 
          className={`${baseBtn} ${selection === "odd" ? "bg-white text-black border-white shadow-[0_0_15px_white]" : "border-neutral-700 text-neutral-500"}`}
        >Odd</button>
      </div>
    );
  }

  if (game === "redBlack") {
    return (
      <div className="flex gap-4">
        <button 
          disabled={disabled}
          onClick={() => setSelection("red")} 
          className={`${baseBtn} ${selection === "red" ? "bg-red-600 border-red-500 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]" : "border-neutral-800 text-neutral-600"}`}
        >Red</button>
        <button 
          disabled={disabled}
          onClick={() => setSelection("black")} 
          className={`${baseBtn} ${selection === "black" ? "bg-neutral-800 border-neutral-700 text-white shadow-[0_0_15px_black]" : "border-neutral-800 text-neutral-600"}`}
        >Black</button>
      </div>
    );
  }

  return (
    <input
      disabled={disabled}
      type="number"
      min="0"
      max="36"
      value={selection}
      onChange={(e) => setSelection(e.target.value)}
      className="w-32 bg-neutral-900 border-2 border-neutral-700 rounded-xl px-4 py-2 text-center text-yellow-500 font-black text-2xl focus:border-yellow-500 outline-none transition-all"
      placeholder="0-36"
    />
  );
};