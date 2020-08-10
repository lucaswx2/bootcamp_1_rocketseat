import React, { Component } from "react";
import avatar from "../assets/avatar.jpeg";
import "./Post.css";
import Comment from "./Comment";

class Post extends Component {
  render() {
    const post = this.props.post;
    const { author, comments } = post;
    return (
      <section className="post">
        <div className="post-header">
          <img src={author.avatar}></img>
          <div className="post-author">
            <span className="post-author-name">{author.name}</span>
            <small className="post-date">{post.date}</small>
          </div>
        </div>
        <div className="post-content">{post.content}</div>
        <div className="post-comments">
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </section>
    );
  }
}

export default Post;
