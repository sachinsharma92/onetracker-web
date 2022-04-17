import { Col, Row, Switch } from 'antd';
import React, { } from 'react';
import PricingCard from '../pricingCard';

const pricingList = [
  {
    title: 'Intro',
    buttonText: 'Choose'
  },
  {
    title: 'Base',
    buttonText: 'Choose'
  },
  {
    title: 'Pro',
    pricemode: 'price-pro-style',
    buttonText: 'Try 1 month',
    saveStaus: true
  },
  {
    title: 'Enterprise',
    buttonText: 'Choose'
  }
]

function onChange(checked: any) {
  console.log(`switch to ${checked}`);
}

export default function PriceHeroSection() {
  return (
    <div className='price-hero-section-style'>
      <div className='container'>
        <div className='content-section'>
          <h1 className='title1'>The Right Plan for Your Business</h1>
          <p className="subtext">
            We have several powerful plans to showcase your business and get discovered <br />
            as a creative entrepreneurs. Everything you need.
          </p>
        </div>

        <div className='swittch-sec'>
          <span>Bill Monthly</span> <Switch defaultChecked onChange={onChange} /> Bill Annualy
        </div>

        <Row gutter={24}>
          {pricingList.map((item) => (
            <Col sm={6}>
              <PricingCard
                buttonText={item.buttonText}
                priceMode={item.pricemode}
                title={item.title}
                saveTextShow={item.saveStaus}
              />
            </Col>
          ))}
        </Row>
      </div>

      <div className='bg-blue'></div>
    </div>
  )
}
