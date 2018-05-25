import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel2';
import './owl.carousel.css';
import './owl.theme.default.css';
import './Thumbnails.css';

const options = {
  loop:false,
  margin:10,
  nav:false,
  URLhashListener:true,
  center: true,
  responsiveRefreshRate: 10,
  dots: false,
  startPosition: 0,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
};

export default class Thumbnails extends Component {
  isThumbnails() {
    if(this.props.thumbnails) return {display: 'block'};
    return {display: 'none'};
  }
  mapItems(){
    const slides = this.props.data.slidesPaths;
    return slides.map((slide, index) => {
      return (
        <a href={`#slide${index + 1}`} key={index}>
          <img className="thumb" src={slide} data-hash={`slide${index + 1}`} />
        </a>
      )
    })
  }

  render(){
    return (
      <OwlCarousel id="thumbnails" style={this.isThumbnails()} ref="car" options={options} >
        {this.mapItems()}
      </OwlCarousel>
    )
  }
}
