import React, { } from 'react';
import { Tabs } from 'antd';
import Image from 'next/image';
import heroImage from "../../../static/images/homepage/tracking-needs.png"

// import "./styles.scss";

const { TabPane } = Tabs;

export default function ViewSection() {
  function callback(key: any) {
    console.log(key);
  }
  return (
    <div className='view-section-style'>
      <div className='container'>
        <div className='content-section'>
          <h3 className='title3'>Different Views for your One Tracking needs</h3>
          <p className='subtext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et non mauris quam varius massa malesuada pretium duis. Arcu pretium nisl duis auctor tempor, viverra. Imperdiet malesuada sociis amet, donec libero posuere viverra nec. Nunc odio quis tempor dapibus.</p>
        </div>


        <div className='tab-section'>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Group View" key="1">
              <Image src={heroImage} alt="image-hero" />
            </TabPane>
            <TabPane tab="Kanban View" key="2">
              <Image src={heroImage} alt="image-hero" />
            </TabPane>
            <TabPane tab="Calendar view" key="3">
              <Image src={heroImage} alt="image-hero" />
            </TabPane>
            <TabPane tab="Gantt View" key="4">
              <Image src={heroImage} alt="image-hero" />
            </TabPane>
            <TabPane tab="Chart View" key="5">
              <Image src={heroImage} alt="image-hero" />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
