export default function BalancePanel({ balance, bet, winnings}) {
  return (
    <div className="flex gap-8 text-white">
      <div>💰 Balance: ${balance}</div>
      <div>🎯 Bet: ${bet}</div>
      <div>🏆 Winnings : ${winnings}</div>
    </div>
  );
}
