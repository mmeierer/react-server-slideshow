import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Chapter extends Component {
  constructor(props){
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(){
    this.props.showGallery()
  }

  showSubchapters(){
    if(this.props.isCurrent){
      return(
        <ol className='controls' dir="rtl">
          {this.props.unit.subchaptersTitles.map((title, index)=> {
            const slide = this.props.unit.subchaptersNumbers[index];
            return (
                  <li key={index}>
                      <a className="chapter" href={`#slide${slide}`}> <h4>{title}</h4>  </a>
                  </li>
              )
          })}
        </ol>
      )
    }
  }
  showGalleryButton() {
    if(!this.props.isCurrent) return;
    return (
      <a className="toggle-gallery" onClick={this.clickHandler} style={{cursor: 'pointer'}}>
        <p  style={{marginTop: 7, marginBottom: 7, paddingRight: 15}}>
          Overview
          <img height="13" src={require('./gallery.png')}
            style={{position: 'relative', marginRight: '3%', marginBottom: 5, paddingLeft: 10}}
            alt="gallery button"/>
        </p>
      </a>)
  }
  render () {
    return (
      <div>
        <Link to={`/${this.props.linkTo}`} className="chapter" id="chapter-link">
          <h3 style={{display: 'inline'}}>{this.props.unit.title}</h3>
        </Link>
        {this.showGalleryButton()}
        {this.showSubchapters()}
      </div>

    )
  }
}

// {/* Gallery */}
// <a className="toggle-gallery">
//   <p  style={{marginTop: 7, marginBottom: 7, paddingRight: 15}}>
//     Overview
//     <img height="13" style={{position: 'relative', marginRight: '3%', marginBottom: 5}}/>
//   </p>
// </a>
