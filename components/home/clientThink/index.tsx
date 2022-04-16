import React, { } from 'react';
import { Row, Col, Avatar, Rate } from 'antd';
import Flickity from 'react-flickity-component';
// import "./styles.scss";


const flickityOptions = {
  pageDots: false,
  contain: true,
  groupCells: 2,
  cellAlign: 'left'
}

const clientCardList = [
  {
    name: 'Robin Smith'
  },
  {
    name: 'Robin Smith'
  },
  {
    name: 'Robin Smith'
  },
  {
    name: 'Robin Smith'
  },
  {
    name: 'Robin Smith'
  },
  {
    name: 'Robin Smith'
  },
]

export default function ClientThinkSection() {

  return (
    <div className='client-think-style'>
      <div className='container'>
        <div className='heading'>
          <h3 className='title3'> What out Client Think <br /> about us </h3>
        </div>


        <div className='client-section'>
          <Row align='middle'>
            <Col sm={6}>
              <h3 className="title3">What <span>Our</span> <br /> Clients Say</h3>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum </p>
            </Col>
            <Col sm={18}>
              <div className='carousel-slider'>
              <Flickity
                className={'carousel'} // default ''
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
              >
                {clientCardList.map((item) => (
                  <div className='card-space'>
                    <div className='client-card'>
                      <div className='head-sec'>
                        <Avatar src="https://i.pravatar.cc/300" size={50} />
                        <div className='text-sec'>
                          <h4 className='title4'>{item.name}</h4>
                          <Rate count={3} defaultValue={2} className="rating" />
                        </div>
                      </div>
                      <p className='description light-blue'>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, ipsum dolor sit</p>
                    </div>
                  </div>
                ))}
              </Flickity>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
