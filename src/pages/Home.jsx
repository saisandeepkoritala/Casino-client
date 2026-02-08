import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Games from "../components/Games";
import AboutUs from "../components/About";
import WhyChoose from "../components/WhyChoose";
import LatestTransactions from "../components/LatestTransactions";
import CasinoSections from "../components/Testimonals";
import Payments from "../components/Payments";
import {JoinCasino,HowCasinoWorks,FAQ} from "../components/ShowOff";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Games />
      <AboutUs />
      <WhyChoose />
      <LatestTransactions />
      <JoinCasino />
      <HowCasinoWorks />
      <FAQ />
      <CasinoSections />
      <Payments />
    </>
  );
}
