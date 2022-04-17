import React, { } from 'react';
import { Col, Row } from 'antd';
import Image from 'next/image';
import Flickity from 'react-flickity-component'
// import "./styles.scss";

import heroImage from "../../../static/images/homepage/integration.png"


const flickityOptions = {
  initialIndex: 1,
  watchCSS: true
}

export default function QuickIntegration() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  return (
    <div className='quick-integration-style'>
      <div className='container'>
        <Row gutter={50}>
          <Col sm={14}>
            <div className='img-box'>
              <div className='img-style'>
                <Image src={heroImage} alt="image-hero" />
              </div>
            </div>
          </Col>
          <Col sm={10}>
            <div className='content-section'>
              <h3 className='title3'>Quick Integration</h3>
              <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non mauris quam varius massa malesuada pretium </p>
            </div>

            <div className='vertical-card'>
              <Flickity
                className={'carousel vertical-slider'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
              >
                <div>
                  <h4 className='title4'><div className='number'>1</div>Quick Integration</h4>
                  <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non mauris quam varius massa malesuada pretium </p>
                </div>
                <div>
                  <h4 className='title4'><div className='number'>2</div>Easy Automation</h4>
                  <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non mauris quam varius massa malesuada pretium </p>
                </div>
                <div>
                  <h4 className='title4'><div className='number'>3</div>Quick Integration</h4>
                  <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non mauris quam varius massa malesuada pretium </p>
                </div>
                <div>
                  <h4 className='title4'><div className='number'>4</div>Easy Automation</h4>
                  <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non mauris quam varius massa malesuada pretium </p>
                </div>
              </Flickity>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
