import React from "react";

export const SelectionInput = ({ game, selection, setSelection }) => {
  if (game === "evenOdd") {
    return (
      <div className="flex gap-4">
        <button onClick={() => setSelection("even")} className={`px-3 py-1 rounded ${selection==="even"?"bg-green-500":"bg-gray-700"}`}>Even</button>
        <button onClick={() => setSelection("odd")} className={`px-3 py-1 rounded ${selection==="odd"?"bg-red-500":"bg-gray-700"}`}>Odd</button>
      </div>
    );
  }

  if (game === "redBlack") {
    return (
      <div className="flex gap-4">
        <button onClick={() => setSelection("red")} className={`px-3 py-1 rounded ${selection==="red"?"bg-red-500":"bg-gray-700"}`}>Red</button>
        <button onClick={() => setSelection("black")} className={`px-3 py-1 rounded ${selection==="black"?"bg-green-500 text-white":"bg-gray-700"}`}>Black</button>
      </div>
    );
  }

  if (game === "number") {
    return (
      <input
        type="number"
        min="0"
        max="36"
        value={selection}
        onChange={(e) => setSelection(e.target.value)}
        className="px-3 py-1 rounded text-black"
        placeholder="0-36"
      />
    );
  }

  return null;
};
