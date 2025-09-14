import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VentureCard from './components/VentureCard';
import VisionMissionSection from './components/VisionMissionSection';
import WhatDrivesUsSection from './components/WhatDrivesUsSection';
import StatsSection from './components/StatsSection';
import OfferingsSection from './components/OfferingsSection';
import IndustriesWeServeSection from './components/IndustriesWeServeSection';
import TestimonialsSection from './components/TestimonialsSection';
import FounderVoiceSection from './components/FounderVoiceSection';
import CallToActionSection from './components/CallToActionSection';
import ForQueriesSection from './components/ForQueriesSection';
import Footer from './components/Footer';
import SubFooter from './components/SubFooter';

function App() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <VentureCard></VentureCard>
      <VisionMissionSection></VisionMissionSection>
      <WhatDrivesUsSection></WhatDrivesUsSection>
      <StatsSection></StatsSection>
      <IndustriesWeServeSection></IndustriesWeServeSection>
      <OfferingsSection></OfferingsSection>
      <TestimonialsSection></TestimonialsSection>
      <FounderVoiceSection></FounderVoiceSection>
      <CallToActionSection></CallToActionSection>
      <ForQueriesSection></ForQueriesSection>
      <Footer></Footer>
      <SubFooter></SubFooter>
    </div>
  );
}

export default App;
