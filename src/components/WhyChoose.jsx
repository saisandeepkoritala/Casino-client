export default function WhyChooseXaxino() {
  const items = [
    {
      title: "Unmatched Game Variety",
      desc: "Slots, table games, and live dealers for every type of player."
    },
    {
      title: "Referral Commission System",
      desc: "Invite friends and earn a percentage of their deposits."
    },
    {
      title: "Fast & Reliable Support",
      desc: "24/7 customer support whenever you need help."
    },
    {
      title: "Big Wins, Bigger Rewards",
      desc: "Generous bonuses, promotions, and jackpots."
    },
    {
      title: "Easy Payments & Withdrawals",
      desc: "Credit cards, e-wallets, crypto & more."
    },
    {
      title: "Safe & Secure Gaming",
      desc: "State-of-the-art encryption & fair play."
    }
  ];

  return (
    <section className="bg-[#050d26] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Why Choose Xaxino
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Here’s why players around the world trust us.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#07183a] border border-white/10 rounded-xl p-6 hover:border-yellow-500 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
