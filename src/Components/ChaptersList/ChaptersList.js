import React, {Component} from 'react';
import Chapter from '../Chapter/Chapter';
import './ChaptersList.css';
export default class Chapters extends Component {

  render() {
    return (
      <div id="chapterWrapper">
        <div className="pre-scrollable chapters">

          <ul>
            {/* Chapter */}
            {
              this.props.data.map((unit, index) => {
                const isCurrent = index===this.props.currentChapter;
               return <Chapter
                  isCurrent={isCurrent}
                  showGallery={this.props.showGallery}
                  isDesktop={this.props.isDesktop}
                  unit = {unit}
                  linkTo = {index}
                  key = {index}/>
              })
            }


          </ul>
        </div>
      </div>
    )
  }
}

// <a className="chapter" href="" id="chapter-link">
//   <h3 style={{display: 'inline'}}>Chapter</h3>
// </a>
// {/* Gallery */}
// <a className="toggle-gallery">
//   <p  style={{marginTop: 7, marginBottom: 7, paddingRight: 15}}>
//     Overview
//     <img height="13" style={{position: 'relative', marginRight: '3%', marginBottom: 5}}/>
//   </p>
// </a>
