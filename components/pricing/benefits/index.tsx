import React, { } from 'react';
import { Col, Row, Collapse } from 'antd';
import Image from 'next/image';

import image1 from "../../../static/images/icons/t-1.svg"
import image2 from "../../../static/images/icons/users.svg"
import image3 from "../../../static/images/icons/target.svg"
const { Panel } = Collapse;

function callback(key: any) {
  console.log(key);
}

const text = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
`;

export default function BenefitsSection() {
  return (
    <>
      <div className='benefits-section-style'>
        <div className='container'>
          <div className='card-tracker'>
            <Row align='middle'>
              <Col sm={4}>
                <h4 className="title4">
                  One Tracker <br />
                  Benefits
                </h4>
              </Col>
              <Col sm={20}>
                <div className='icon-sec'>
                  <div className='icon-box'>
                    <div className='img-style'>
                      <Image src={image1} alt="image-hero" />
                    </div>
                    <h4 className="title4">
                      Benefits Heading
                    </h4>
                  </div>

                  <div className='icon-box'>
                    <div className='img-style'>
                      <Image src={image2} alt="image-hero" />
                    </div>
                    <h4 className="title4">
                      Benefits Heading
                    </h4>
                  </div>

                  <div className='icon-box'>
                    <div className='img-style'>
                      <Image src={image3} alt="image-hero" />
                    </div>
                    <h4 className="title4">
                      Benefits Heading
                    </h4>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div className='accordian-section'>
        <h3 className="title3">One Tracker Benefits</h3>

        <div className='container'>
          <Collapse defaultActiveKey={['1']} onChange={callback}>
            <Panel header="What is Webflow and why is it the best website builder?" key="1">
              <p className='subtext'>{text}</p>
            </Panel>
            <Panel header="What is your favorite template from BRIX Templates?" key="2">
              <p className='subtext'>{text}</p>
            </Panel>
            <Panel header="How do you clone a Webflow Template from the Showcase?" key="3">
              <p className='subtext'>{text}</p>
            </Panel>
            <Panel header="Why is BRIX Templates the best Webflow agency out there?" key="4">
              <p className='subtext'>{text}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </>
  )
}
