import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Games from "../components/Games";
import AboutUs from "../components/About";
import WhyChooseXaxino from "../components/WhyChoose";
import LatestTransactions from "../components/LatestTransactions";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Games />
      <AboutUs />
      <WhyChooseXaxino />
      <LatestTransactions />
    </>
  );
}
