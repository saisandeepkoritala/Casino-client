import { useState } from "react";
import SlotGrid from "./SlotGrid";
import SpinButton from "./SpinButton";
import BalancePanel from "./BalancePanel";
import BonusOverlay from "./BonusOverlay";
import { generateGrid, getRandomSymbolInBonus, countSymbol } from "./utils";

export default function BullBlitz() {
  const [grid, setGrid] = useState(generateGrid());
  const [balance, setBalance] = useState(2000);
  const [winnings, setWinnings] = useState(0);
  const [buttonDisable, setButtonDisable] = useState(false);
  const bet = 25;

  // Bonus state
  const [showBullSplash, setShowBullSplash] = useState(false);
  const [bonus, setBonus] = useState(false);
  const [bonusSpins, setBonusSpins] = useState(3);
  const [bonusGrid, setBonusGrid] = useState([]); // coin values in bonus
  const [lockedPositions, setLockedPositions] = useState([]); // which positions are locked
  const [bonusTotal, setBonusTotal] = useState(0); // compounded bonus total

  const spin = () => {
    setButtonDisable(true);
    if (balance < bet) {
      setButtonDisable(false);
      return;
    }

    const newGrid = generateGrid();
    setGrid(newGrid);
    setBalance((b) => b - bet);

    const bullCount = countSymbol(newGrid, "BULL");

    if (bullCount >= 5) {
      // Trigger bonus after 3s
      setTimeout(() => {
        setBonus(true);
        setBonusSpins(3);
      }, 3000);

      // Assign random coins to bulls
      const initialCoins = newGrid
        .flat()
        .filter((s) => s === "BULL")
        .map(() => (Math.floor(Math.random() * 5) + 1) * 10);

      // Build bonus grid with coin values
      const bonusG = newGrid.map((reel) =>
        reel.map((s) => (s === "BULL" ? initialCoins.shift() : null))
      );

      setBonusGrid(bonusG);

      // Store locked positions
      const locked = newGrid.map((reel) => reel.map((s) => s === "BULL"));
      setLockedPositions(locked);

      // Set initial bonus total
      const initialTotal = bonusG.flat().filter(Boolean).reduce((a, b) => a + b, 0);
      setBonusTotal(initialTotal);
    }

    setTimeout(() => setButtonDisable(false), 3500);
  };

  const bonusSpin = () => {
    if (bonusSpins <= 0) {
      // End bonus: add compounded total to winnings
      setWinnings((w) => w + bonusTotal);
      setBonus(false);
      setBonusGrid([]);
      setLockedPositions([]);
      setBonusTotal(0);
      return;
    }

    // Generate new symbols for empty positions only
    const newGrid = bonusGrid.map((reel, i) =>
      reel.map((s, j) => (lockedPositions[i][j] ? s : getRandomSymbolInBonus()))
    );

    // Track new bull positions
    const newBullPositions = newGrid.map((reel, i) =>
      reel.map((s, j) => lockedPositions[i][j] || s === "BULL")
    );
    setLockedPositions(newBullPositions);

    // Assign coins to new bulls and apply compound formula
    let newBullCoins = [];
    for (let i = 0; i < newGrid.length; i++) {
      for (let j = 0; j < newGrid[i].length; j++) {
        if (!lockedPositions[i][j] && newGrid[i][j] === "BULL") {
          const coin = (Math.floor(Math.random() * 5) + 1) * 10;
          newBullCoins.push(coin);
          newGrid[i][j] = coin;
        }
      }
    }

    // Update bonus grid
    const updatedGrid = newGrid.map((reel, i) =>
      reel.map((v, j) => (lockedPositions[i][j] ? bonusGrid[i][j] : v))
    );
    setBonusGrid(updatedGrid);

    if (newBullCoins.length > 0) {
      // Apply compounded bonus rule: total = prevTotal + prevTotal + newBull
      let newTotal = bonusTotal;
      newBullCoins.forEach((coin) => {
        newTotal = newTotal + newTotal + coin;
      });
      setBonusTotal(newTotal);

      setBonusSpins(3); // reset spins if new bulls
      // setShowBullSplash(true);
      // setTimeout(() => setShowBullSplash(false), 3000);
    } else {
      setBonusSpins((s) => s - 1); // decrease spins if no new bulls
      if(bonusSpins===0){
            setWinnings((w) => w + bonusTotal);
            setBonus(false);
            setBonusGrid([]);
            setLockedPositions([]);
            setBonusTotal(0);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold text-yellow-400">Bull Blitz</h1>

      <BalancePanel balance={balance} bet={bet} winnings={winnings} />

      {bonus ? <SlotGrid grid={bonusGrid} /> : <SlotGrid grid={grid} />}

      {!bonus && <SpinButton onSpin={spin} disabled={buttonDisable} />}

      {bonus && (
        <BonusOverlay
          bonusGrid={bonusGrid}
          coins={bonusGrid.flat().filter(Boolean)}
          spins={bonusSpins}
          onSpin={bonusSpin}
          showBullSplash={showBullSplash}
          bonusTotal={bonusTotal} // pass bonusTotal to overlay for live display
        />
      )}
    </div>
  );
}
