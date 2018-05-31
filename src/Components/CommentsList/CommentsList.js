import React, {Component} from 'react';
import Comment from '../Comment/Comment';

export default class CommentsList extends Component{
  constructor(props){
    super(props)
    this.state = {
      comDisplayed  : 3
    }
    this.loadMore = this.loadMore.bind(this);
  }
  renderLoadMoreLink(){
    if(this.state.comDisplayed >= this.props.comments.length) return;
    return (
      <a style={{textAlign: 'center', display: 'block', cursor:'pointer'}}
        onClick={this.loadMore}> Load more </a>
    )
  }
  renderComments(){
    const comments = this.props.comments.slice(0, this.state.comDisplayed).map((comment, index) => {
      return <Comment comment={comment} key={index}/>
    })
    if(comments.length) return comments;
    return (
      <h4 style={{textAlign: 'center', display: 'block'}}>No comments.</h4>
    )
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // reload hash and comments
    if(prevProps.slide !== this.props.slide || prevProps.currentChapter !== this.props.currentChapter) {
      this.setState({
        comDisplayed: 3
      })
    }
  }
  loadMore(e){
    e.preventDefault();
    const displayed = this.state.comDisplayed;
    const total = this.props.comments.length ;
    // load possible
    if(displayed < total){
      // can load more than 3
      if(displayed + 3 < total){
        this.setState({
          comDisplayed: this.state.comDisplayed + 3
        })
      } else if(displayed + 3 >= total){
        this.setState({
          comDisplayed: total
        })
      }
    }
  }
  render(){
    return (
      <div>
        {this.renderComments()}
        {this.renderLoadMoreLink()}
      </div>
    )
  }
}
