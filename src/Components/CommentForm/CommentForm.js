import React, {Component} from 'react';
const styleTextarea = {
  zIndex: 'auto',
  position: 'relative',
  lineHeight: 1.5,
  fontSize: 13,
  transition: 'none',
  background: 'white',
  marginBottom: 10
}
export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      text: '',
      tag: 'general feedback',
      message: {
        text: '',
        style: {}
      }
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleTagChange = this.handleTagChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showMessage = this.showMessage.bind(this);

  }
  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }
  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleTagChange(e) {
    this.setState({
      tag: e.target.value
    })
  }
  setMessage(message){
    this.setState({
      message: message
    })
    setTimeout(()=>{
      this.setState({
        message: ''
      })
    }, 1000)
  }
  async handleSubmit(e){
    e.preventDefault();
    let text;
    let color;
    if(!this.state.name || !this.state.text) {
      text = 'All fields are required';
      color = {color: 'red'}
      this.setMessage({
        text: text,
        style: color
      })
      return;
    };
    const comment = {
      author: this.state.name,
      text: this.state.text,
      tag: this.state.tag,
      chapter: this.props.currentChapter,
      slide: this.props.slide
    }
    try {
      const url = `${window.location.origin}/api/comments`;
      const response = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        method: 'POST',
        body: JSON.stringify(comment)
      })
      if (response.ok) {
        // give success message
        this.setMessage({
          text: 'Comment submited',
          style: {color: 'green'}
        })
        // reset values
        this.setState({
          name: '',
          text: '',
          tag: 'general feedback'
        })
        // update comments
        const comments =  await response.json();
        this.props.updateComments(comments);

      } else {
        throw new Error('Request failed!');
      }

    } catch(e) {
      this.setMessage({
        text: 'Post request failed',
        style: {color: 'red'}
      })
    }

  }
  showMessage(){
    if(this.state.message){
      return <h3 style={this.state.message.style}>{this.state.message.text}</h3>
    }
  }
  render() {
    return (
      <div id="comment-form" className="container" style={{marginBottom: 15, marginTop :15}}>
        {this.showMessage()}

        <form id="post-form"  method="post" encType="multipart/form-data">
        <fieldset>
            <div className="form-group">
            <p style={{fontSize:'12pt'}}>You comment</p>

            <input className="form-control" value={this.state.name}
              style={styleTextarea}
              type="text" placeholder="Your name" required
              onChange={this.handleNameChange}/>

            <textarea className="form-control" id="post-text" rows="3"
              value={this.state.text}
              placeholder="Comment" data-gramm="true"
              data-txt_gramm_id="1604aed8-89c1-f7d1-565f-a6b577d22530"
              data-gramm_id="1604aed8-89c1-f7d1-565f-a6b577d22530"
              spellCheck="false" data-gramm_editor="true"
              style={styleTextarea} required
              onChange={this.handleTextChange}></textarea>
            </div>

            <div className="form-group">
            <select className="form-control" id="selectUserTag"
              value={this.state.tag}
              style={{marginBottom:10}} required onChange={this.handleTagChange}>
                <option value="" disabled defaultValue="select tag">select tag</option>
                <option>general feedback</option>
                <option>improvement</option>
                <option>mistake</option>
            </select>
            </div>
            <div id="results"></div>

            <button type="submit" className="btn btn-secondary pull-left"
              style={{color: 'white',backgroundColor: '#BFBFBF'}}
              onClick={this.handleSubmit}>Add comment</button>

        </fieldset>
        </form>
      </div>
    )
  }
}
