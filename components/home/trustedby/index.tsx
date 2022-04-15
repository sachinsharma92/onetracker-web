import React, { } from 'react';
import { Input, Button } from 'antd';
import Image from 'next/image';
// import "./styles.scss";

import heroImage from "../../../static/images/homepage/hero-image.png";

// Client's
import googleImage from "../../../static/images/icons/google.svg";
import uberImage from "../../../static/images/icons/uber.svg";
import stripeImage from "../../../static/images/icons/stripe.svg";
import mashableImage from "../../../static/images/icons/mashable.svg";
import airbnbImage from "../../../static/images/icons/airbnb.svg";


const clientList = [
  {
    imageUrl: googleImage,
  },
  {
    imageUrl: uberImage,
  },
  {
    imageUrl: stripeImage,
  },
  {
    imageUrl: mashableImage,
  },
  {
    imageUrl: airbnbImage,
  },
]

export default function TrustedBy() {

  return (
    <div className='trusted-style'>
      <div className='container'>
      <div className='title-section'>
        <h1 className='title3'>Trusted by</h1>
      </div>

      <div className='image-section'>
        {clientList.map((item) => (
          <div className='image-box'>
            <Image src={item.imageUrl} alt="image-hero" />
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}
