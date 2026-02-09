import Reel from "./Reel";

export default function SlotGrid({ grid }) {
  return (
    <div className="flex justify-center">
      {grid.map((reel, i) => (
        <Reel key={i} symbols={reel} stopDelay={(i+1) * 500} /> // 1s delay per reel
      ))}
    </div>
  );
}

