import { Col, Row } from 'antd';
import Image from 'next/image';
import React, { } from 'react';
// import "./styles.scss";

import FrontImage from "../../../static/images/homepage/front.png"

export default function OneTracker() {

  return (
    <div className='onetracker-style'>
      <div className='container'>
        <Row align='middle'>
          <Col sm={12}>
            <div className='img-box'>
            <Image src={FrontImage} alt="image-hero" />
            </div>
          </Col>
          <Col sm={12}>
            <h3 className="title3">One Tracker on the Go !</h3>
            <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo quam quam quis arcu. Pellentesque fames nam purus at. </p>
          </Col>
        </Row>
      </div>
    </div>
  )
}
