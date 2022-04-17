import React, { } from 'react';
import LayoutPrimary from '../../common/layoutPrimary';
import ClientThinkSection from '../../components/home/clientThink';
import HowWorks from '../../components/home/howWorks';
import OneTracker from '../../components/home/oneTracker';
import BenefitsSection from '../../components/pricing/benefits';
import PriceHeroSection from '../../components/pricing/priceHeroSection';
// import "./styles.scss";

export default function PricingScreen() {

  return (
    <LayoutPrimary className='home-section-style'>
      <PriceHeroSection />
      <BenefitsSection />
      <ClientThinkSection />
      <HowWorks />
      <OneTracker />
    </LayoutPrimary>
  )
}
