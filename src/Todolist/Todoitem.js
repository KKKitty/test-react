import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Todoitem extends Component {
  constructor(props) {
      super(props);
      this.handleClick=this.handleClick.bind(this)
  }
  // componentWillMount(){
  //   console.log('child componentWillMount')
  // }
  // componentDidMount(){
  //   console.log('child componentDidMount')
  // }
  render() {
    // console.log('child render')
    const { content } = this.props
    return (
      <li onClick={this.handleClick}>
        {content}
      </li>
    )
  }
  handleClick(){
    const { deleteItem, index } = this.props
    deleteItem( index )
  }
}

Todoitem.propTypes={
  // test : PropTypes.string.isRequired,
  content : PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
  deleteItem : PropTypes.func,
  index : PropTypes.number
}
// Todoitem.defaultProps= {
//   test:'hello world'
// }

export default Todoitem