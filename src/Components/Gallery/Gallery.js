import React, {Component} from 'react';

export default class Gallery extends Component {
  constructor(props){
    super(props);
    this.handleImageClick =this.handleImageClick.bind(this);
  }
  handleImageClick(){
    this.props.hideLightbox();
  }
  renderGallery(){
    const unit = this.props.data[this.props.currentChapter]
    return unit.subchaptersTitles.map((title, index) => {
      return (
        <div key={index}>
          <div className="col-lg-12">
              <p style={{margin:0, marginBottom: 8 , fontWeight: 'bold', color: 'white', fontSize: '13pt'}}>{title}</p>
          </div>
          {
            unit.subchaptersSlides[index].map((slide) => {
              const urlHash = `#slide${slide.match(/Slide(\d+)/)[1]}`;
              return (
                <div className="col-lg-3 col-md-4 col-xs-6 thumb" key={urlHash}>
                    <a className="thumbnail" href={urlHash} onClick={this.handleImageClick}>
                      <img className="img-responsive" src={slide} alt="gallery item"/>
                    </a>
                </div>
              )
            })
          }
        </div>
      )
    })
  }
  render() {
    return(
      <div style={{paddingBottom: 30}}>
        <div className="row white">

          {this.renderGallery()}

        </div>
      </div>
    )
  }
}
// <div className="col-lg-12">
//     <p style={{margin:0, marginBottom: 8 , fontWeight: 'bold', color: 'white', fontSize: '13pt'}}>SUBCHAPTER</p>
// </div>
// <div className="col-lg-3 col-md-4 col-xs-6 thumb">
//     <a className="thumbnail" href="#slide1" onClick={this.handleImageClick}>
//       <img className="img-responsive"/>
//     </a>
// </div>
