import { Button, Col, Divider, Row } from 'antd';
import Image from 'next/image';
import React, { } from 'react';
import LogoWhite from "../static/images/logo-white.svg";
import Logotheme from "../static/images/logo-full.svg";

import instaImage from "../static/images/icons/insta.svg";
import fbImage from "../static/images/icons/twitter.svg";
import facebookImage from "../static/images/icons/fb.svg";


// Social Images
import androidIcon from "../static/images/icons/android.svg";
import iosIcon from "../static/images/icons/ios.svg";
import Link from 'next/link';

export default function LayoutPrimary(props: any) {
  return (
    <div className={`layout-primary-style ${props.className}`}>
      <div className='header-section'>
        <div className='container'>
          <div className='logo'>
            <Image src={LogoWhite}></Image>
          </div>
          <div className='button-section'>
            <Button className='button-outline'>Sign In</Button>
            <Button className='button-white'>Sign Up</Button>
          </div>
        </div>
      </div>
      <div className='main-content'>
        {props.children}
      </div>
      <div className='footer-section'>
        <div className='container'>
          <Row>
            <Col sm={12}>
              <div className='logo'>
                <Link href="">
                  <Image src={Logotheme}></Image>
                </Link>
              </div>
              <div className="store-icons">
                <div className='store-img'>
                  <Link href="">
                    <Image src={androidIcon}></Image>
                  </Link>
                </div>
                <div className='store-img'>
                  <Image src={iosIcon}></Image>
                </div>
              </div>
            </Col>
            <Col sm={12}>
              <Row gutter={24}>
                <Col sm={12}>
                  <div className='links'>
                    <Link href="">Feature</Link>
                    <Link href="/pricing">Pricing</Link>
                  </div>
                </Col>
                <Col sm={12}>
                  <div className='links'>
                    <Link href="">Terms of Use</Link>
                    <Link href="">Legal Notice</Link>
                    <Link href="">Privacy Policy</Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <div className='social-with-copyright'>
            <div className='social-links'>
              <Link href="">
                <div className='icon'>
                  <Image src={instaImage}></Image>
                </div>
              </Link>
              <Link href="">
                <div className='icon'>
                  <Image src={fbImage}></Image>
                </div>
              </Link>
              <Link href="">
                <div className='icon'>
                  <Image src={facebookImage}></Image>
                </div>
              </Link>
            </div>
            <Divider />
            <p className="subtext">OneTracker 2022</p>
          </div>
        </div>
      </div>
    </div>
  )
}
