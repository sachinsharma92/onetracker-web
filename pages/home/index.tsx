import React, { } from 'react';
import LayoutPrimary from '../../common/layoutPrimary';
import ClientThinkSection from '../../components/home/clientThink';
import HeroSection from '../../components/home/heroSection';
import HowWorks from '../../components/home/howWorks';
import OneTracker from '../../components/home/oneTracker';
import QuickIntegration from '../../components/home/quickIntegration';
import TrackerSection from '../../components/home/trackerSection';
import TrustedBy from '../../components/home/trustedby';
import ViewSection from '../../components/home/viewSection';
// import "./styles.scss";

export default function HomeScreen() {

  return (
    <LayoutPrimary className='home-section-style'>
      <HeroSection />
      <TrustedBy />
      <TrackerSection />
      <ViewSection />
      <QuickIntegration/>
      <ClientThinkSection/>
      <HowWorks/>
      <OneTracker/>
    </LayoutPrimary>
  )
}
