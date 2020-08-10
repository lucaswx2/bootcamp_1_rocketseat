import React, { Component } from "react";
import avatar from "../assets/avatar.jpeg";
import "./Comment.css";

class Comment extends Component {
  render() {
    const comment = this.props.comment;

    return (
      <section className="comment">
        <div className="comment-header">
          <img src={comment.author.avatar}></img>
          <div className="comment-author">
            <span className="comment-author-name">{comment.author.name}</span>
            <small className="comment-date">63 jun 2019</small>
          </div>
        </div>
        <div className="comment-content">{comment.content}</div>
      </section>
    );
  }
}

export default Comment;
