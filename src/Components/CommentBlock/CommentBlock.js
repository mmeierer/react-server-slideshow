import React, {Component} from 'react';
import CommentForm from '../CommentForm/CommentForm';
import CommentsList from '../CommentsList/CommentsList';

import './CommentBlock.css';

export default class CommentBlock extends Component{

  render() {
    const comments = this.props.comments.filter((comment) => {
      if(comment.slide === this.props.slide) return comment
    });
    return (
      <div>
        <CommentForm
          updateComments={this.props.updateComments}
          currentChapter={this.props.currentChapter}
          slide = {this.props.slide}/>
        <CommentsList comments={comments}
          slide = {this.props.slide}
          currentChapter={this.props.currentChapter}/>
      </div>
    )
  }
}
