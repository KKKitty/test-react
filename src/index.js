import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist/Todolist';
import Animation from './Animation/Animation';

class App extends React.Component {
    render() {
      return (
        <div className="App">
          简单的Todolist
          <Todolist></Todolist>
          动画学习
          <Animation></Animation>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

