import React, {Component} from 'react';

export default class Gallery extends Component {
  constructor(props){
    super(props);
    this.handleImageClick =this.handleImageClick.bind(this);
  }
  handleImageClick(){
    this.props.hideLightbox();
  }
  render() {
    return(
      <div style={{paddingBottom: 30}}>
        <div className="row white">

            <div className="col-lg-12">
                <p style={{margin:0, marginBottom: 8 , fontWeight: 'bold', color: 'white', fontSize: '13pt'}}>SUBCHAPTER</p>
            </div>
            <div className="col-lg-3 col-md-4 col-xs-6 thumb">
                <a className="thumbnail" href="#slide1" onClick={this.handleImageClick}>
                  <img className="img-responsive" src={require('./img/2.jpg')}/>
                </a>
            </div>
        </div>
      </div>
    )
  }
}
