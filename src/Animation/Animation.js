import React, { Component, Fragment } from 'react'
import { CSSTransition } from 'react-transition-group';
import './style.css'

export class Animation extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isShow : true
      }
      this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle() {
      this.setState(()=>({isShow : this.state.isShow ? false : true }))
    // this.setState({
    //     isShow : this.state.isShow ? false : true
    // })
  }
  render() {
    return (
      <Fragment>
        <div className={ this.state.isShow ? 'show':'hide'}>Hello world！！！</div>
        <CSSTransition>
            <div>CSSTransition</div>
        </CSSTransition>
        <button onClick = {this.handleToggle}>切换</button>
      </Fragment>
    )
  }
}

export default Animation
