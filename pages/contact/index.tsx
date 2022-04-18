import React, { } from 'react';
import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import LayoutPrimary from '../../common/layoutPrimary';
import { RightOutlined } from '@ant-design/icons';
// import "./styles.scss";

const { TextArea } = Input;
export default function ContactScreen() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <LayoutPrimary className="contact-page-style header-white">
      <Row>
        <Col sm={12}>
          <div className='contect-section'>
            <h2 className='title2'>We’d love to <br /> hear from you </h2>
            <p className="subtext">We have several powerful plans to showcase your business and get discovered as a creative entrepreneurs. Everything you need.</p>
          </div>
        </Col>
        <Col sm={12}>
          <div className='form-section'>
            <div className='form bg-gray'>
              <h4 className="title4">Contact us</h4>
              <Form
                name="basic"
                layout='vertical'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                // rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input className='input-custom' />
                </Form.Item>

                <Form.Item
                  label="Email Address"
                  name="email"
                // rules={[{ required: true, message: 'Please input your email!' }]}
                >
                  <Input className='input-custom' />
                </Form.Item>

                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                // rules={[{ required: true, message: 'Please input your phone!' }]}
                >
                  <Input className='input-custom' />
                </Form.Item>

                <Form.Item
                  label="Message"
                  name="password"
                // rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <TextArea className='textarea-custom' rows={4} />
                </Form.Item>

                <Form.Item className='mb-0'>
                  <Button type="primary" className='button-theme' htmlType="submit">
                    Submit <RightOutlined />
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </LayoutPrimary>
  )
}
