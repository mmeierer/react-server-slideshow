import React from 'react';
import Comment from '../Comment/Comment';

const comments = [
  {
    author: 'Test1',
    text: 'Test comment',
    date: Date.now(),
    tag: 'general feedback',
    slide: 1,
    chapter: 0
  },
  {
    author: 'Test2',
    text: 'Test comment',
    date: Date.now(),
    tag: 'mistake',
    slide: 2,
    chapter: 0
  },
  {
    author: 'Test3',
    text: 'Test comment',
    date: Date.now(),
    tag: 'improvement',
    slide: 3,
    chapter: 0
  }
]

export default (props) => {
  return (
    <div>
      {
        props.comments.map((comment, index) => {
          return <Comment comment={comment} key={index}/>
        })
      }
    </div>
  )
}
