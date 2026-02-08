import GoldCard from '../assets/HomePageGoldCard.avif';

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row bg-black text-white px-5 sm:px-10 md:px-20 py-12 md:py-24 justify-between items-center gap-10">
      
      {/* Text Content */}
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 leading-snug md:leading-tight">
          Play online games <br /> and win a lot of bonuses
        </h1>

        <p className="mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base md:text-lg">
          A virtual casino platform built for fun and practice.
          No real money involved — just games & experience.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded w-full sm:w-auto">
            Sign Up
          </button>
          <button className="border border-yellow-400 px-6 py-3 rounded w-full sm:w-auto">
            Sign In
          </button>
        </div>
      </div>

      {/* Image Card */}
      <div className="w-full max-w-sm md:w-144 md:h-96 rounded-xl bg-gradient-to-br from-yellow-400/40 to-transparent p-[1px]">
        <div className="w-full h-full rounded-xl overflow-hidden bg-black">
          <img
            src={GoldCard}
            alt="Hero Card"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
    </section>
  );
}
