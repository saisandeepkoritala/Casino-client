import { useEffect, useState } from "react";

export default function Reel({ symbols, stopDelay = 0 }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(-100); // start moving up

    const timer = setTimeout(() => {
      setOffset(0); // stop at final position after delay
    }, stopDelay);

    return () => clearTimeout(timer);
  }, [symbols, stopDelay]);

  return (
    <div className="h-72 w-20 overflow-hidden border-2 border-yellow-400 
    rounded-lg flex align-middle justify-around">
      <div
        className="flex flex-col gap-2 transition-transform duration-1000 align-middle justify-center"
        style={{ transform: `translateY(${offset}%)` }}
      >
        {symbols.map((s, i) => (
        <div
          key={i}
          className={`h-20 w-16 flex items-center justify-center rounded-lg 
            border-2 border-yellow-400 text-lg font-bold overflow-hidden
            ${
              s === "BULL"
                ? "bg-red-600 text-white"
                : s === "COIN"
                ? "bg-yellow-400 text-black"
                : "bg-slate-800 text-white"
            }`}
        >
          {s}
        </div>
      ))}
      </div>
    </div>
  );
}
