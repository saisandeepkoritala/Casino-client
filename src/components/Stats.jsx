const stats = [
  { label: "Total Users", value: "1,255,000" },
  { label: "Total Winners", value: "845,000" },
  { label: "Total Deposit", value: "4,845,000" },
  { label: "Total Withdraw", value: "945,000" }
];

import { useSelector } from "react-redux";
export default function Stats() {
  const isDarkMode = useSelector((state) => state.user.isDarkMode);
  const classNames = isDarkMode ? `bg-black text-white` : "bg-white text-[#0b1220]";

  return (
    <div className={isDarkMode?`${classNames} bg-gradient-to-b from-[#08162f] to-[#070d22] py-10 flex justify-around`:`${classNames} bg-gradient-to-b py-10 flex justify-around border-gray-200`}>
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <p className="text-yellow-400 text-xl font-bold">{s.value}</p>
          <p className={`text-sm ${classNames.split(" ")[1]}`}>{s.label}</p>
        </div>
      ))}
    </div>
  );
}
