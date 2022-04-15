import React, { } from 'react';
import { Input, Carousel } from 'antd';
import Image from 'next/image';
// import "./styles.scss";

import heroImage from "../../../static/images/homepage/hero-image.png"
import TrackIcon1 from "../../../static/images/icons/t-1.svg"

const cardSection = [
  {
    imageUrl: TrackIcon1,
    title: 'Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices pellentesque dui molestie viverra quam egestas eu. Placerat maecenas hendrerit facilisis maecenas ullamcorper sit varius sem.',
  },
  {
    imageUrl: TrackIcon1,
    title: 'Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices pellentesque dui molestie viverra quam egestas eu. Placerat maecenas hendrerit facilisis maecenas ullamcorper sit varius sem.',
  },
  {
    imageUrl: TrackIcon1,
    title: 'Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices pellentesque dui molestie viverra quam egestas eu. Placerat maecenas hendrerit facilisis maecenas ullamcorper sit varius sem.',
  },
  {
    imageUrl: TrackIcon1,
    title: 'Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices pellentesque dui molestie viverra quam egestas eu. Placerat maecenas hendrerit facilisis maecenas ullamcorper sit varius sem.',
  },
  {
    imageUrl: TrackIcon1,
    title: 'Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices pellentesque dui molestie viverra quam egestas eu. Placerat maecenas hendrerit facilisis maecenas ullamcorper sit varius sem.',
  },
  {
    imageUrl: TrackIcon1,
    title: 'Heading',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices pellentesque dui molestie viverra quam egestas eu. Placerat maecenas hendrerit facilisis maecenas ullamcorper sit varius sem.',
  },
]

const onChange = () => {
}

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipeToSlide: true,
  autoplay: true,
  speed: 5000,
};

export default function TrackerSection() {
  return (
    <div className='tracker-section-style'>
      <div className='container'>
        <div className='content-section'>
          <h3 className='title3 lg'>One Tracker for all <br /> Your Tracking Needs</h3>
          <p className='subtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non mauris quam varius massa malesuada pretium duis. Arcu pretium nisl duis auctor tempor, viverra. Imperdiet malesuada sociis amet, donec libero posuere viverra nec. Nunc odio quis tempor dapibus.</p>
        </div>
        </div>

        <div className='card-section'>
          <Carousel afterChange={onChange} {...settings}>
            {cardSection.map((item) => (
              <div className='icon-card'>
                <div className='icon-box'>
                  <Image src={item.imageUrl} alt="image-hero" />
                </div>
                <h3 className='title3'>{item.title}</h3>
                <p className='subtext'>{item.description}</p>
              </div>
            ))}
          </Carousel>
        </div>
    </div>
  )
}
