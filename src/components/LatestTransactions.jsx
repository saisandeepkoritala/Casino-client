import { useSelector } from "react-redux";

export default function LatestTransactions() {
  const isDarkMode = useSelector((state) => state.user.isDarkMode);
  const classNames = isDarkMode ? `bg-black text-white` : "bg-white text-[#0b1220]";

  const winners = [
    { name: "Arshan Masih", game: "Spin Wheel", amount: "$7.50" },
    { name: "user1111 usr", game: "Number Slot", amount: "$10.00" },
    { name: "user1111 usr", game: "Number Slot", amount: "$8.00" },
  ];

  const transactions = [
    { id: "#ITS2E84EZHA3", user: "shangil007", date: "2025-08-16 07:43 PM", amount: "$15.00" },
    { id: "#RWVKD6UXAT5", user: "shangil007", date: "2025-08-16 07:53 PM", amount: "$10.00" },
    { id: "#FARD587XAF8", user: "shangil007", date: "2025-08-16 08:03 PM", amount: "$25.00" },
    { id: "#UTHH587XAF5", user: "shangil007", date: "2025-08-16 08:43 PM", amount: "$5.00" },
    { id: "#F9HH587XAF9", user: "shangil007", date: "2025-08-16 08:53 PM", amount: "$15.00" },
  ];

  return (
    <section className={`${classNames} py-20`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Transactions And Winners
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Winners */}
          <div className={`${classNames} rounded-xl p-6 border border-white/10`}>
            <h3 className="text-xl font-semibold mb-4">Latest Winners</h3>
            <div className="space-y-4">
              {winners.map((w, i) => (
                <div key={i} className="flex justify-between text-sm border-b-2 border-white/10 pb-3">
                  <div>
                    <p className="font-medium">{w.name}</p>
                    <p className="text-gray-400">{w.game}</p>
                  </div>
                  <span className="text-yellow-400 font-semibold">
                    {w.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Transactions */}
          <div className={`${classNames} rounded-xl overflow-hidden`}>
            <table className="w-full text-sm">
              <thead className="bg-yellow-500 text-black">
                <tr>
                  <th className="p-3 text-left">Transaction ID</th>
                  <th className="p-3 text-left">User</th>
                  <th className="p-3 text-left">Date</th>
                  <th className="p-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, i) => (
                  <tr key={i} className="border-b-2 border-white/10 ">
                    <td className="p-3">{t.id}</td>
                    <td className="p-3">{t.user}</td>
                    <td className="p-3">{t.date}</td>
                    <td className="p-3 text-right text-yellow-400">
                      {t.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
}
