import Hero from "../components/Hero";
import StatsBar from "../components/StatsBar";
import Services from "../components/Services";
import Team from "../components/Team";
import Reviews from "../components/Reviews";
import AppSection from "../components/AppSection";
import CommunityPlans from "../components/CommunityPlans";
import Contact from "../components/Contact";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Services />
      <Team />
      <Reviews />
      <AppSection />
      <CommunityPlans />
      <Contact />
      <Faq />
    </>
  );
}
