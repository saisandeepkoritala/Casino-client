import { useSelector } from "react-redux";

export default function AboutUs() {
  const isDarkMode = useSelector((state) => state.user.isDarkMode);
  const classNames = isDarkMode ? `bg-black text-white` : "bg-white text-[#0b1220]";
  return (
    <section className={`${classNames} py-20`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className={`${classNames.split(' ')[0]} mb-8 leading-relaxed`}>
            Welcome to Xaxino, where excitement, innovation, and fairness come together
            to create the ultimate online casino experience. We’re more than just a
            gaming platform — we’re a community of passionate players.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <Feature text="Best Platform" />
            <Feature text="Quick Deposit" />
            <Feature text="Quick Withdraw" />
            <Feature text="24/7 Support" />
          </div>

          <button className={`bg-yellow-500 ${classNames.split(' ')[0]} px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition`}>
            Learn More
          </button>
        </div>

        {/* Right Visual Placeholder */}
        <div className="flex justify-center">
          <div className="w-80 h-80 rounded-full bg-yellow-400 flex items-center justify-center">
            <span className={`${classNames.split()[1]} text-xl font-semibold`}>
              Casino Visual
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

function Feature({ text }) {
  const isDarkMode = useSelector((state) => state.user.isDarkMode);
  const classNames = isDarkMode ? `bg-black text-white` : "bg-white text-[#0b1220]";
  return (
    <div className={`flex items-center gap-3 ${classNames}`}>
      <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
      <span>{text}</span>
    </div>
  );
}
