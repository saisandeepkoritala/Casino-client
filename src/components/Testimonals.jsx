import Pic1 from '../assets/Pic1.png';
import Pic2 from '../assets/Pic2.webp';
import Pic3 from '../assets/Pic3.webp';
import { useSelector } from 'react-redux';
import React from "react";

export default function CasinoSections() {
  const isDarkMode = useSelector((state) => state.user.isDarkMode);
  const classNames = isDarkMode ? `bg-black text-white` : "bg-white text-[#0b1220]";
  
  return (
    <div className={isDarkMode?`${classNames} min-h-screen bg-gradient-to-b from-[#0b1530] to-[#050b1e] font-sans`:`${classNames} min-h-screen font-sans`}>
        {/* ================= Blog Section ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-6">Our Blog News</h2>
        <p className={`${classNames.split(" ")[1]} text-center max-w-2xl mx-auto mb-16`}>
          Stay updated with the latest trends, tips, and insights from Casino.
          Our blog is your go-to resource for everything related to online
          casinos, gaming strategies, and industry news.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {[{
            title: "The Rise of Online Casinos",
            image: Pic1,
          },{
            title: "The Future of Online Gambling",
            image: Pic2,
          },{
            title: "Cryptocurrency in Online Casinos",
            image: Pic3,
          }].map((post, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:scale-[1.02] transition"
            >
              <img src={post.image} className="h-48 w-full object-cover" />
              <div className="p-6">
                <span className={`${classNames.split(" ")[1]} inline-block mb-3 text-xs bg-yellow-400 text-black px-3 py-1 rounded-full`}>
                  24 Aug, 2022
                </span>
                <h3 className="text-lg font-semibold">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Referral Section ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center relative">
          <div className="absolute w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full -top-10 -left-10" />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Referral"
            className={`${classNames} relative w-64`}
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-6">Dynamic Referral Commission</h2>
          <p className={`${classNames.split(" ")[1]} mb-8 leading-relaxed`}>
            At Casino, we believe in rewarding our loyal players. With our Referral
            Program, you can earn exciting rewards simply by inviting your friends
            to join the platform. It’s easy, fun, and rewarding for everyone!
          </p>

          <ul className="space-y-4">
            {["Get Your Referral Link", "Share with Friends", "Earn Commissions"].map(
              (item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-yellow-400 rounded-sm" />
                  <span className={`${classNames.split(" ")[1]}`}>{item}</span>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      {/* ================= Testimonials ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">
          What User Say About Casino
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {[{
            name: "Shunil Bhat",
            text: "As a beginner, I was nervous about online casinos, but Casino made it so simple. The platform is easy to use, and the support team is always helpful. I've had so much fun playing and winning!",
            avatar: "https://i.pravatar.cc/100?img=12",
          },{
            name: "Raba Khan",
            text: "Casino has completely changed the game for me. The live dealer games are incredible, and the bonuses are so generous. I love how transparent they are with everything. Highly recommend!",
            avatar: "https://i.pravatar.cc/100?img=47",
          }].map((t, idx) => (
            <div
              key={idx}
              className={isDarkMode?`${classNames} bg-white/5 border border-white/10 rounded-xl p-8 relative`:`${classNames} bg-black/5 border border-black/10 rounded-xl p-8 relative`}
            >
              <p className={`${classNames.split(" ")[1]} italic mb-6`}>“{t.text}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  className="w-12 h-12 rounded-full"
                  alt={t.name}
                />
                <span className="font-semibold">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}
