import React, { } from 'react';
import HeroSection from '../../components/home/heroSection';
import TrackerSection from '../../components/home/trackerSection';
import TrustedBy from '../../components/home/trustedby';
import ViewSection from '../../components/home/viewSection';
// import "./styles.scss";

export default function HomeScreen() {

  return (
    <div className='home-section-style'>
      <HeroSection />
      <TrustedBy />
      <TrackerSection />
      <ViewSection />
    </div>
  )
}
