import {useState } from "react";
import SlotGrid from "./SlotGrid";
import SpinButton from "./SpinButton";
import BalancePanel from "./BalancePanel";
import BonusOverlay from "./BonusOverlay";
import { generateGrid,getRandomSymbolInBonus, countSymbol } from "./utils";

export default function BullBlitz() {
  const [grid, setGrid] = useState(generateGrid());
  const [balance, setBalance] = useState(2000);
  const [winnings,setWinnings] = useState(0);
  const [buttonDisable,setButtonDisable] = useState(false);
  const bet = 25;

  // Bonus state
  const [showBullSplash, setShowBullSplash] = useState(false);
  const [bonus, setBonus] = useState(false);
  const [bonusSpins, setBonusSpins] = useState(3);
  const [bonusGrid, setBonusGrid] = useState([]); // grid during bonus
  const [lockedPositions, setLockedPositions] = useState([]); // bulls locked
  const [coins, setCoins] = useState([]);

  // Main spin
  const spin = () => {
    setButtonDisable(true)
    if (balance < bet){ 
        setButtonDisable(false)
        return;
    }    

    const newGrid = generateGrid();
    console.log(newGrid)
    setGrid(newGrid);
    setBalance((currentBalance) => currentBalance - bet);

    // Count bulls
    let bullCount = countSymbol(newGrid, "BULL");

    if (bullCount >= 6) {
      // Trigger bonus
      setTimeout(()=>{
        setBonus(true);
        setBonusSpins(3);
      },3000)

      // Copy grid to bonus grid
      const bonusG = newGrid.map((reel) => reel.map((s) => (s === "BULL" ? "BULL" : null))
      );
      setBonusGrid(bonusG);

      // Store locked bull positions
      const locked = newGrid.map((reel, i) =>
        reel.map((s, j) => (s === "BULL" ? true : false))
      );
      console.log(locked)
      setLockedPositions(locked);

      // Initialize coins for bulls
      const initialCoins = newGrid.flat().filter((s) => s === "BULL").map(() => 50);
      setCoins(initialCoins);
    }

    setTimeout(()=>setButtonDisable(false), 3500);

  };

  const bonusSpin = () => {
  if (bonusSpins <= 0) {
    // End bonus
    const win = coins.reduce((a, b) => a + b, 0);
    setWinnings((currentWinnings) => currentWinnings + win);
    setBonus(false);
    setBonusGrid([]);
    setLockedPositions([]);
    setCoins([]);
    return;
  }

  // Generate new symbols for empty positions only
  const newGrid = bonusGrid.map((reel, i) =>
    reel.map((s, j) => {
      if (lockedPositions[i][j]) return "BULL"; // keep locked
      return getRandomSymbolInBonus();
    })
  );

  // Count new bulls
  let newBullPositions = newGrid.map((reel, i) =>
    reel.map((s, j) => {
      if (s === "BULL") return true;
      return lockedPositions[i][j]; // keep previously locked
    })
  );

  setLockedPositions(newBullPositions);
  setBonusGrid(newGrid);

  // Add coins for newly landed bulls
  const newBulls = countSymbol(newGrid, "BULL") - countSymbol(bonusGrid, "BULL");
  if (newBulls > 0) {
    setCoins((prev) => [...prev, ...Array(newBulls).fill(50)]);
    setBonusSpins(3); // reset spins if new bull

    // Show "BULL BLITZ" splash for 3 seconds
    setShowBullSplash(true);
    setTimeout(() => setShowBullSplash(false), 3000);
  } else {
    setBonusSpins((s) => s - 1); // reduce spin otherwise
  }
};

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold text-yellow-400">Bull Blitz</h1>

      <BalancePanel balance={balance} bet={bet} winnings={winnings}/>

      {bonus ? <SlotGrid grid={bonusGrid} /> : <SlotGrid grid={grid} />}

      {!bonus && <SpinButton onSpin={spin} disabled={buttonDisable} />}
      
      {bonus && (
        <BonusOverlay coins={coins} spins={bonusSpins} onSpin={bonusSpin} bonusGrid={bonusGrid} showBullSplash={showBullSplash}/>
      )}
    </div>
  );
}
