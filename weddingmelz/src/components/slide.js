import React, { Component } from "react";
import Slider from "react-slick";

import Slide0 from "../images/slide_0.JPG";
import Slide1 from "../images/slide_1.JPG";
import Slide2 from "../images/slide_2.JPG";
import Slide3 from "../images/slide_3.JPG";
import Slide4 from "../images/slide_4.JPG";
import Slide5 from "../images/slide_5.JPG";



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 6000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true
    };
    return (
      
      <div class="slick-section">
      <div class="slick-overlay"></div>
        <Slider {...settings}>
        <img src={Slide0} alt="Joe and Bailey" />
        <img src={Slide1} alt="Joe and Bailey" />
        <img src={Slide2} alt="Joe and Bailey" />
        <img src={Slide3} alt="Joe and Bailey" />
        <img src={Slide4} alt="Joe and Bailey" />
        <img src={Slide5} alt="Joe and Bailey" />
        </Slider>
      </div>
    );
  }
}
