import React, {Component} from 'react';
import Carousel from '../Carousel/Carousel';
import Gallery from '../Gallery/Gallery';
import './lightbox.css';

export default class Lightbox extends Component {
  constructor(props){
    super(props);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }
  isLightbox() {
    if(this.props.lightbox || this.props.gallery) return {display: 'block'};
    return {display: 'none'};
  }
  isCarousel() {
    if(this.props.lightbox) return {display: 'block'};
    return {display: 'none'};
  }
  isGallery() {
    if(this.props.gallery) return {display: 'block'};
    return {display: 'none'};
  }
  handleCloseClick(e){
    e.preventDefault();
    this.props.hideLightbox();
  }
  render() {
    return (
      <div className="lightbox" style={this.isLightbox()}>
        <div className="closex" onClick={this.handleCloseClick}></div>
        <div className="lightbox-container" style={this.isCarousel()}>
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <Carousel
              currentChapter={this.props.currentChapter}
              data = {this.props.data}/>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
        {/* GALLERY */}
        <div className="gallery" style={this.isGallery()}>
          <Gallery
            hideLightbox={this.props.hideLightbox}
            currentChapter={this.props.currentChapter}
            data = {this.props.data} />
        </div>

    </div>
    )
  }
}
