import React, { Component } from 'react';
import './App.css';
// carousels
import Carousel from '../Carousel/Carousel';
import Thumbnails from '../Thumbnails/Thumbnails';
import Lightbox from '../Lightbox/Lightbox';
import ChaptersList from '../ChaptersList/ChaptersList';

const testData = require('./ProjectMap');

const style = {
  rowWhite: {
    paddingTop: 5
  },
  rowBlue: {
    background: 'blue', // must be DYNAMIC
    paddinBottom: 0,
    paddingTop: 20
  },
  title : {
    margin: 0,
    paddingTop: 25
  }
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lightbox      : false,
      gallery       : false,
      currentChapter: 0,
      thumbnails    : false,
      data          : testData
    }
    this.hideLightbox = this.hideLightbox.bind(this);
    this.showLightbox = this.showLightbox.bind(this);
    this.showGallery = this.showGallery.bind(this);
  }
  hideLightbox(){
    this.setState({
      lightbox: false,
      gallery: false
    })
  }
  showLightbox(){
    this.setState({
      lightbox: true,
      gallery: false,
    })
  }
  showGallery(){
    this.setState({
      lightbox: false,
      gallery: true,
    })
  }

  updateDimensions() {
    if(window.innerWidth > 600) {
      this.setState({ thumbnails: true });
    } else {
      this.setState({ thumbnails: false });
    }
  }
  componentDidMount() {
    if(window.innerWidth > 600) this.setState({ thumbnails: true });
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
   window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(nextProps);
  // }
  render() {
    const data = this.state.data['units'];
    return (

      <div className="App">

        <Lightbox
          lightbox  = {this.state.lightbox}
          gallery   = {this.state.gallery}
          hideLightbox = {this.hideLightbox}
          currentChapter={this.state.currentChapter}
          data = {data} />

        <div className="row white" style={style.rowWhite}>
            { /* LEFT COLUMN */ }
            <div className="col-md-12">
              { /* Lecture title */ }
                <div className="pull-left" style={{paddingLeft:20}}>
                    <p style={style.title}><mark>#TITLE</mark></p>
                </div>
                <div className="container">
                  <div className="logo pull-right">
                    &nbsp;
                  </div>
                </div>
            </div>
        </div>
        {/* main row */}
        <div className="row blue" style={style.rowBlue}>
          {/*LEFT COLUMN*/}
          <div className="col-md-3">
              <div className="row"></div>
              <div className="row text-right pull-right">

                {/*List of chapters and subchapters*/}
                <ChaptersList
                  showGallery={this.showGallery}
                  currentChapter={this.state.currentChapter}
                  data = {data}/>

              </div>
          </div>
          {/*CENTRAL COLUMN*/}

          <div className="col-md-6">
              <div className="row"></div>

                <div>
                  {/*MAIN carouesl*/}

                </div>
                <Carousel
                  showLightbox = {this.showLightbox}
                  currentChapter={this.state.currentChapter}
                  data = {data}/>

          </div>
          {/*right COLUMN*/}
          <div className="col-md-3"></div>
      </div>

      {/*ROW FOR thumbnails*/}
      <div className="row blue" style={style.rowBlue}>
          {/*Left COLUMN*/}
          <div className="col-md-3"></div>
          {/*CENTRAL COLUMN*/}
          <div className="col-md-6">


              {/*THUMBNAILS*/}
              <Thumbnails
                thumbnails={this.state.thumbnails}
                currentChapter={this.state.currentChapter}
                data = {data}/>


          </div>
          {/*Right COLUMN*/}
          <div className="col-md-3"></div>
      </div>

      {/*ROW FOR CONTRIBUTORS conditional*/}
      <div className="row white" style={{paddingBottom: 20}}>
          {/*Left COLUMN*/}
          <div className="col-md-3"></div>
          {/*CENTRAL COLUMN*/}
          <div className="col-md-6">
              <div>
                  <p><mark># contributors</mark></p>
                  <p>{this.state.data.contributors}</p>
              </div>
          {/*Right COLUMN*/}
          </div>
          <div className="col-md-3"></div>
      </div>

      {/*Row for description CONDITIONAL*/}
      <div className="row white" style={{paddingBottom: 20}}>
          {/*LEFT COLUMN*/}
          <div className="col-md-3"></div>
          {/*CENTRAL COLUMN*/}
          <div className="col-md-6">
              <div>
                  <p><mark># course description</mark></p>
                  <p>{this.state.data.description}</p>
              </div>
          {/*RIGHT COLUMN*/}
          </div>
          <div className="col-md-3"></div>
      </div>
    </div>
    );
  }
}

export default App;
// <% } else { %>
// <!-- empty element of the same size -->
// <div className="container">
// <div className="logo pull-right">
//   &nbsp;
// </div>}
