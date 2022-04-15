import React, { } from 'react';
import { Input, Button } from 'antd';
import Image from 'next/image';
// import "./styles.scss";

import heroImage from "../../../static/images/homepage/hero-image.png"
import dottedImage from "../../../static/images/illustration/dotted.svg"

export default function HeroSection() {

  return (
    <div className='hero-section-style'>
      <div className='content-section'>
        <h1 className='title1'>One Tracker for all <br /> Your Tracking Needs</h1>
        <div className='input-inline-style'>
          <Input placeholder='Enter your e-mail address' />
          <Button className='button-theme' type="primary">Get started</Button>
        </div>
      </div>
      <div className='bg-blue'></div>

      <div className="image-hero">
        <div className='img-style'>
          <Image src={heroImage} alt="image-hero" />
        </div>
        <div className='dotted-style'>
          <Image src={dottedImage} alt="image-hero" />
        </div>
      </div>

      <div className='circle-image-sec'></div>
    </div>
  )
}
