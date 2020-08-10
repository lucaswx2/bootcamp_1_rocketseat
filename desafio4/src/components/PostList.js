import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "https://monadnockcommunityhospital.com/wp-content/uploads/2015/05/140514B-6804-Tarasevich-head-shot_RGB72-2-180x180.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "http://tedxriodosul.com.br/assets/team/diego.jpg"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Luycas Fernandes",
              avatar:
                "http://g.glbimg.com/og/gs/gsat4/f/thumbs/quemfaz/2017/09/12/lucas-inutilissimo.jpg"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Diego Beiço de tucunaré",
          avatar: "https://i.imgur.com/spbK8ID.jpg"
        },
        date: "04 Jun 2019",
        content: "E assim q funfa o react?",
        comments: [
          {
            id: 1,
            author: {
              name: "Lucão",
              avatar: "https://i.imgur.com/XBgrPQj.jpg"
            },
            content: "Assim mesmo mano!"
          },
          {
            id: 2,
            author: {
              name: "Leandro dos bitcoin",
              avatar: "https://i.imgur.com/zpcVeG4.png"
            },
            content: "Quanto tempo pra essa porra ficar"
          },
          {
            id: 3,
            author: {
              name: "Café dos bitcoin",
              avatar: "https://i.imgur.com/XezgZbW.jpg"
            },
            content: "Quanto tempo pra essa porra ficar"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <section id="post-container">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    );
  }
}

export default PostList;
