import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('store') @observer
class Post extends Component {
  render() {
    let post = this.props.post
    return <div className='post'>
      <div className='score'>{`${post.data.score}: `}</div><div>{`${post.data.title}`}</div>
      <style jsx>{`
        .post {
          display: flex;
          margin-top: 8px;
        }
        .score {
          flex: 0 0 55px;
        }
      `}</style>
    </div>
  }
}

@inject('store') @observer
export default class extends Component {
  render() {
    return <div>
      {this.props.store.posts.map( (post, i) => <Post key={post.data.id} className='post' post={post}/> )}
      <style jsx>{`
        div {
          display: flex;
          flex-flow: column;
        }
      `}</style>
    </div>
  }
}
