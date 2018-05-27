import React from 'react';
import CommentForm from '../CommentForm/CommentForm';
const tags = {
  'general feedback'  : "badge badge-pill badge-primary",
  'mistake'           : "badge badge-pill badge-danger",
  'improvement'       : "badge badge-pill badge-success"
}

export default (props) => {
  // const date = Date().toLocalDateString('en');
  // handleReplyClick(e){
  //   e.preventDefault();
  // }
  const format = {weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'} //, hour: 'numeric', minute: 'numeric'
  const date = (new Date(props.comment.date)).toLocaleDateString('en', format);
  return (

    <div className="container comment" style={{marginBottom: 7, color:'black'}} >
        <div className="panel-white post panel-shadow" style ={{border: 0 }}>

            {/*
            <!-- close button -->
            <div className="pull-right m-3">

                    <input id='delete' type="hidden" />
                    <button type="button" className="close delete-post" id={{comment.id}}>&times;</button>
            </div>
            */}


            <div className="post-heading" id="comment-heading">
                <div className="pull-left meta">
                    <div className="title h5">
                        <h6 className="text-muted time"  style={{fontSize: '10pt'}}>
                          <b style={{color:'black'}}>{props.comment.author}</b> made a comment on slide <b style={{color:'black'}}># {props.comment.slide}.</b>
                          &nbsp;&nbsp; {date}
                        </h6>
                    </div>
                </div>
            </div>
            <div className="post-description">
                <p>{props.comment.text}</p>

                {/*<div>
                    <button id="reply-comment" type="submit" className="btn btn-secondary pull-right"
                      style={{borderColor: 'white', borderRadius:10}}>reply</button>
                </div> */}

                <div className="pull-right" style={{paddingRight: 10, paddingRop: 2}}>

                    <span id="userTag" className={tags[props.comment.tag]}>{props.comment.tag}</span>
                </div>

            </div>
        </div>
    </div>
  )
};
