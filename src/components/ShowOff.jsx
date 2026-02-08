import { useState } from "react";
import { UserPlus, Wallet, Gamepad2, Trophy, ChevronDown } from "lucide-react";

/* ============================
   1. CTA / JOIN SECTION
============================ */
export function JoinCasino() {
  return (
    <section className="bg-gradient-to-b from-[#0a1430] to-[#070d22] py-24 text-center text-white relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Ready to Play? Join Casino Today!
      </h2>
      <button className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg shadow-lg transition">
        JOIN NOW
      </button>
    </section>
  );
}

/* ============================
   2. HOW CASINO WORKS
============================ */
export function HowCasinoWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      desc: "Create your free account in minutes. Fast, secure, and risk-free.",
    },
    {
      icon: Wallet,
      title: "Deposit",
      desc: "Add funds using cards, e-wallets, or cryptocurrencies.",
    },
    {
      icon: Gamepad2,
      title: "Play Game",
      desc: "Enjoy slots, table games, and live dealer experiences.",
    },
    {
      icon: Trophy,
      title: "Win",
      desc: "Win big and withdraw your earnings securely anytime.",
    },
  ];

  return (
    <section className="bg-[#070d22] py-24 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        How Casino Works
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="text-center bg-[#0a1430] rounded-2xl p-8 shadow-lg"
          >
            <step.icon className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
            <p className="text-gray-300 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================
   3. FAQ SECTION
============================ */
export function FAQ() {
  const faqs = [
    {
      question: "What is Casino?",
      answer: "Casino is an online gaming platform where you can enjoy a variety of casino-style games in a safe and fun environment."
    },
    {
      question: "Is Casino safe to use?",
      answer: "Yes! Casino uses industry-standard security protocols to ensure your data and transactions are safe and secure."
    },
    {
      question: "What payment methods does Casino accept?",
      answer: "Casino accepts major payment methods including credit/debit cards, PayPal, and popular cryptocurrencies for deposits and withdrawals."
    },
    {
      question: "Can I play on my mobile device?",
      answer: "Absolutely! Casino is fully optimized for mobile devices, so you can enjoy games on your smartphone or tablet anytime, anywhere."
    },
    {
      question: "Can I try games for free?",
      answer: "Yes, Casino offers a demo mode for most games, allowing you to try them for free before betting real money."
    },
    {
      question: "How does the referral program work?",
      answer: "Invite your friends to Casino and earn rewards when they sign up and play. The more friends you refer, the more bonuses you can earn!"
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="bg-gradient-to-b from-[#0a1430] to-[#070d22] py-24 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-300 mb-12">
        Everything you need to know to get started with Casino.
      </p>

      <div className="max-w-4xl mx-auto space-y-4 px-6">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-[#0a1430] rounded-xl px-6 py-4 cursor-pointer"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </div>
            {open === i && (
              <p className="mt-4 text-sm text-gray-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================
   USAGE EXAMPLE
============================ */
// import { JoinCasino, HowCasinoWorks, FAQ } from './CasinoComponents';
// 
// export default function Page() {
//   return (
//     <>
//       <JoinCasino />
//       <HowCasinoWorks />
//       <FAQ />
//     </>
//   );
// }
