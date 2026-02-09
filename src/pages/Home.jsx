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
    <section id="navbar">
        <Navbar />
      </section>
      <section id="home">
        <Hero />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="games">
        <Games />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="why">
        <WhyChoose />
      </section>

      <section id="transactions">
        <LatestTransactions />
      </section>

      <section id="contact">
        <JoinCasino />
      </section>

      <section id="how">
        <HowCasinoWorks />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="blogs">
        <CasinoSections />
      </section>

      <section id="payments">
        <Payments />
      </section>
      </>
  );
}

