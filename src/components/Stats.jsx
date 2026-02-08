const stats = [
  { label: "Total Users", value: "1,255,000" },
  { label: "Total Winners", value: "845,000" },
  { label: "Total Deposit", value: "4,845,000" },
  { label: "Total Withdraw", value: "945,000" }
];

export default function Stats() {
  return (
    <div className="bg-[#08162f] text-white py-10 flex justify-around">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <p className="text-yellow-400 text-xl font-bold">{s.value}</p>
          <p className="text-sm text-gray-300">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
