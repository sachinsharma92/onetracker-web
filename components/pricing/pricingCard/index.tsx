import { Button } from 'antd';
import React, { } from 'react';

export default function PricingCard(props: any) {
  return (
    <div className={`pricing-card-style ${props.priceMode}`}>
      <div className='title-sec'>
        <h4 className='title4'>{props.title}</h4>
        {props.saveTextShow && <div className='save'>Save $40</div>}
      </div>
      <ul className='price-list'>
        <li>Upload Video up to 720p Resolution</li>
        <li>Attachment & Post Scheduling</li>
        <li>Set your rates</li>
        <li>Exclusive Deals</li>
        <li>Advanced Statistics</li>
      </ul>
      <div className="price-text">
        <span>$</span>123 <span>/month</span>
      </div>
      <Button className='button-theme' type="primary">{props.buttonText}</Button>
    </div>
  )
}
