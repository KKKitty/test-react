import React, { Component, Fragment} from 'react';
import Todoitem from './Todoitem';
import './style.css'

class Todolist extends Component {
  constructor (props) {
    super(props);
    this.state={
      inputValue:'',
      lists:['123']
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
  }
  // componentWillMount(){
  //   console.log('parent componentWillMount')
  // }
  // componentDidMount(){
  //   console.log('parent componentDidMount')
  // }
  render() {
    // console.log('parent render')
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input 
            id="insertArea"
            className="input"
            type="text" 
            value={this.state.inputValue} 
            onChange={this.handleInputChange}
            ref={(input)=>(this.input=input)}
          />
          <button
            onClick={this.handleButtonClick}
          >提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
  getTodoItem(){
    return this.state.lists.map((item,index)=>{
      return (
        <Todoitem 
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
          key={index}
        />
      )
    })
  }
  handleInputChange(e){
    // console.log(e.target+'等价'+this.input) (ref不建议使用)
    const value=e.target.value
    this.setState(()=>({
      inputValue: value
    }))
    // this.setState({
    //   inputValue: e.target.value
    // })
    // console.log(e.target.value)
  }
  handleButtonClick(){
    this.setState((prevState)=>({
      lists: [...prevState.lists, prevState.inputValue],
      inputValue: ''
    }))
    // this.setState({
    //   lists: [...this.state.lists, this.state.inputValue],
    //   inputValue: ''
    // })
  }
  handleItemDelete(index){
    this.setState((prevState)=>{
      const lists=[...prevState.lists]
      lists.splice(index,1)
      return {lists}
    })
    // const lists=[...this.state.lists]
    // lists.splice(index,1)
    // // this.state.lists=this.state.lists.splice(index,1)   immutable
    // this.setState({
    //   lists:lists
    // })
  }
}

export default Todolist;