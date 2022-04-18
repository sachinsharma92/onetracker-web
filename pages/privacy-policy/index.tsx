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
    <LayoutPrimary className="privacy-policy-style">

      <div className='header'>
        <div className="container">
          <h4 className='title4'>Privacy Policy </h4>
        </div>
      </div>

      <div className="container">
        <div className="content-sec">
          <p className="subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus vel a lectus massa aliquet tempus. Urna elementum ullamcorper nunc velit viverra ac leo aliquam. Congue adipiscing velit, vehicula turpis vel ullamcorper vivamus. Magna congue hendrerit tortor, adipiscing urna, nec, in morbi. Ultrices eu congue malesuada nisi. Enim dis posuere aliquet ultrices. Dictum egestas laoreet ullamcorper proin habitasse quam aliquam orci. Enim facilisi amet volutpat nunc velit adipiscing pellentesque parturient arcu. Nunc sit proin massa eu. Tortor quam placerat vitae egestas etiam morbi non. Est nunc at euismod eu nibh sed ultrices nisl. Tortor a, sed tellus nam ut donec tristique. Vitae, maecenas urna, eros, vitae tristique quam et ut. Tortor pulvinar dictum dignissim erat ante. Iaculis et et tellus lorem urna, tristique egestas enim, nisl. Et risus, scelerisque vel mauris. Duis adipiscing sit elit metus diam. Urna mauris metus vitae viverra cras tincidunt. Quam ut at vel egestas. Est nibh auctor nullam nulla mollis ultricies. Sed velit eget orci, viverra donec neque tincidunt integer. Nulla nulla justo dignissim dictum. Nisl sapien gravida interdum nisl leo pretium, massa. Amet tempus gravida pellentesque cras sit faucibus mi, mi nisl. Rutrum mi, et auctor cursus sollicitudin phasellus feugiat. Accumsan eget tincidunt quis in posuere lobortis. Sollicitudin nam sed id et. Aenean tellus a arcu vitae lobortis molestie turpis vitae. Amet dictum congue in nibh bibendum non bibendum. Vel libero leo lobortis bibendum. Gravida sit vivamus fermentum ut habitant nunc tellus tincidunt eget. Quam eget semper malesuada risus malesuada pellentesque non parturient. Hac quam integer faucibus habitant iaculis adipiscing ut quis odio. Sagittis amet, tortor dui nisl egestas lectus lacinia quam. Vitae eu sagittis pellentesque justo amet sollicitudin nisi. Ultrices egestas sed quam sit metus lorem nisi ac, euismod. Bibendum lorem dictum egestas vel fermentum, urna feugiat faucibus quam. Amet vestibulum gravida commodo, pharetra eget arcu, felis elementum. Aliquet tellus ultricies varius orci, vestibulum magna maecenas ac sagittis. Lacus enim dui enim eget lectus elementum aliquam. Cursus semper sed sed metus, amet arcu purus viverra vitae. Etiam donec et netus semper malesuada massa lectus et. Ornare ultricies purus neque, nisl, vitae sit proin. Fermentum lectus pulvinar dui dui. Nunc massa at adipiscing rhoncus. Consectetur aliquet aliquet sagittis at volutpat, sed mattis. Lacus turpis quam sed cursus gravida sit. Condimentum porttitor etiam ut ipsum quam purus. Elementum, nunc netus laoreet velit. Imperdiet vel potenti faucibus elit phasellus viverra. Placerat accumsan a quis mauris, id praesent magna in. Sollicitudin natoque et mollis auctor faucibus. Congue turpis volutpat nec posuere pretium posuere. Sagittis volutpat commodo egestas in consectetur tristique. Phasellus diam justo faucibus auctor id purus. Dictumst duis rhoncus purus quis pulvinar faucibus mi habitant. Ullamcorper vitae, placerat proin egestas sed eleifend proin dui. Orci, nisl sit ultricies adipiscing. Pharetra nisl risus ut lacus purus posuere viverra. Vel nunc, dolor sollicitudin in viverra quam ultricies. Morbi mauris lacus, fames vulputate. Varius at sagittis vitae, pellentesque porttitor. Purus hendrerit massa fermentum ultricies commodo. Dictum dolor nunc amet, dapibus vestibulum risus imperdiet a sit. Velit molestie mollis massa sed adipiscing potenti. In libero risus sit diam vitae. Amet dolor sed ipsum tempus. Pellentesque cursus ultrices tristique integer non iaculis vel purus. Ac enim massa sollicitudin adipiscing lacinia maecenas. Mattis cras urna ultricies mattis sodales ultricies dignissim. Risus turpis scelerisque facilisis in.
          </p>
        </div>
      </div>
    </LayoutPrimary>
  )
}
