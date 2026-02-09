import { SYMBOLS, WEIGHTS, BONUSWEIGHTS } from "./Symbols";

export function getRandomSymbol() {
  const pool = [];
  SYMBOLS.forEach((s) => {
    for (let i = 0; i < WEIGHTS[s]; i++) pool.push(s);
  });
  return pool[Math.floor(Math.random() * pool.length)];
}

export function getRandomSymbolInBonus() {
  const pool=[]
  SYMBOLS.forEach((s) => {
    for (let i = 0; i < BONUSWEIGHTS[s]; i++) pool.push(s);
  });
  return pool[Math.floor(Math.random() * pool.length)];
}



export function generateGrid() {
  return Array.from({ length: 5 }, () =>
    Array.from({ length: 3 }, getRandomSymbol)
  );
}

export function countSymbol(grid, target) {
  return grid.flat().filter((s) => s === target).length;
}
