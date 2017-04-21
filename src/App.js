import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import Reddit from './Reddit'

@inject('store') @observer
export default class extends Component {
  render() {
    return <div>
      <button className='orange' onClick={() => this.props.store.resetTimer()}>
        <span className='fa fa-first-order'></span><span>Seconds passed: {this.props.store.timer}</span>
      </button>
      <Reddit/>
      <style jsx>{`
        .orange {
          background-color: orange;
          box-sizing: border-box;
          border: 1px solid grey;
          cursor: pointer;
        }
        .orange:hover {
          background-color: black;
          color: white;
        }
        span.fa-first-order {
          margin-right: 8px;
        }
      `}</style>
    </div>
  }
}
