import React, { useState } from 'react';

const HeadsOrTails = () => {
  const [sideSelection, setSideSelection] = useState('heads');
  const [coinResult, setCoinResult] = useState('heads');
  const [isFlipping, setIsFlipping] = useState(false);
  const [balance, setBalance] = useState(1000);
  const [betInput, setBetInput] = useState(10); // What's in the input box
  const [activeBet, setActiveBet] = useState(0); // The "Locked" bet
  const [gameState, setGameState] = useState('idle');

  const startFlip = () => {
    // 1. Validation
    if (isFlipping || balance < betInput || betInput <= 0) return;

    // 2. Lock the bet and deduct from balance immediately
    const currentWager = betInput;
    setActiveBet(currentWager);
    setBalance(prev => prev - currentWager);
    
    setIsFlipping(true);
    setGameState('idle');

    // 3. Determine outcome
    const outcome = Math.random() > 0.5 ? 'heads' : 'tails';
    
    setTimeout(() => {
      setCoinResult(outcome);
      setIsFlipping(false);

      if (sideSelection === outcome) {
        // WIN: Give back the original bet + the win (2x total)
        const winnings = currentWager * 2;
        setBalance(prev => prev + winnings);
        setGameState('won');
      } else {
        // LOSS: Money is already gone from balance
        setGameState('lost');
      }
    }, 1500); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#050505] text-white p-4 font-sans">
      
      {/* Balance - Flashes green on win, red on bet */}
      <div className="text-center mb-12">
        <p className="text-gray-500 text-xs font-black tracking-widest uppercase mb-2">Bankroll</p>
        <div className={`text-6xl font-black transition-colors duration-300 ${gameState === 'won' ? 'text-green-400' : 'text-white'}`}>
          ${balance.toLocaleString()}
        </div>
      </div>

      {/* 3D Coin with improved Spin Animation */}
      <div className="relative w-48 h-48 mb-16 [perspective:1000px]">
        <div 
          className={`relative w-full h-full transition-transform duration-[1500ms] ease-[cubic-bezier(0.15,0,0.15,1)] [transform-style:preserve-3d]
            ${isFlipping ? 'animate-[spin_0.2s_linear_infinite]' : ''}
            ${!isFlipping && coinResult === 'tails' ? '[transform:rotateY(180deg)]' : '[transform:rotateY(0deg)]'}
          `}
        >
          {/* Heads Side */}
          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 border-4 border-yellow-200 flex items-center justify-center shadow-[0_0_30px_rgba(234,179,8,0.2)] [backface-visibility:hidden]">
            <span className="text-6xl font-black text-yellow-900">H</span>
          </div>

          {/* Tails Side */}
          <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-b from-gray-300 to-gray-500 border-4 border-gray-100 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <span className="text-6xl font-black text-gray-800">T</span>
          </div>
        </div>
      </div>

      {/* Game Message */}
      <div className="h-10 mb-6 text-2xl font-black italic tracking-tight">
        {gameState === 'won' && <span className="text-green-400 animate-bounce">YOU WON ${activeBet}!</span>}
        {gameState === 'lost' && <span className="text-red-500 animate-pulse">LOST ${activeBet}</span>}
        {isFlipping && <span className="text-blue-400">FLIPPING ${activeBet}...</span>}
      </div>

      {/* Controls */}
      <div className="w-full max-w-xs space-y-4 bg-zinc-900 p-6 rounded-[2rem] border border-white/5 shadow-2xl">
        
        {/* Toggle Choice */}
        <div className="flex p-1 bg-black rounded-xl border border-white/10">
          {['heads', 'tails'].map((side) => (
            <button
              key={side}
              onClick={() => !isFlipping && setSideSelection(side)}
              className={`flex-1 py-3 rounded-lg font-bold uppercase transition-all ${sideSelection === side ? 'bg-white text-black' : 'text-zinc-500'}`}
            >
              {side}
            </button>
          ))}
        </div>

        {/* Bet Input */}
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-bold text-zinc-500 uppercase px-1">
            <span>Bet Amount</span>
            <span>Min $1</span>
          </div>
          <input 
            type="number"
            disabled={isFlipping}
            value={betInput}
            onChange={(e) => setBetInput(Number(e.target.value))}
            className="w-full bg-black border border-white/10 rounded-xl py-4 text-center text-xl font-mono focus:border-blue-500 outline-none disabled:opacity-50"
          />
        </div>

        {/* Action Button */}
        <button 
          onClick={startFlip}
          disabled={isFlipping || balance < betInput}
          className={`w-full py-5 rounded-2xl font-black text-xl transition-all active:scale-95 shadow-lg
            ${isFlipping 
              ? 'bg-zinc-800 text-zinc-600' 
              : 'bg-blue-600 hover:bg-blue-500 shadow-blue-900/20'}`}
        >
          {isFlipping ? 'WAITING...' : 'PLAY NOW'}
        </button>
      </div>
    </div>
  );
};

export default HeadsOrTails;