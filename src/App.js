import "./css/App.css";
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {},
      todos: [],
    };

    this.handleInputChange = (e) => {
      this.setState({
       task: {text: e.target.value, completed: false}
     })
    };
   
    this.handleSubmit = (e) => {
      e.preventDefault(); 
      this.state.todos.push(this.state.task)
      this.setState(
        {todos: [...this.state.todos ]}
      )
    }

    this.deleteTodoHandler = () => {

    }
  }

  render() {
    return (
      <div className={"App container"}>
          <h1 className="logo">TO DO LIST</h1>
        <form className="addInput" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="What do you want to get done today?"
            onChange={this.handleInputChange}
          ></input>
          <button type="submit" >
          <i className="fa fa-check" aria-hidden="true"></i>
          </button>
          
        </form>

          {this.state.todos.map( (item, index) => {
            return (
              <div  key={index} className={"task-container"}>
                <input type="checkbox" name="complete" className="completed"/>
                <p>{item.text}</p>
                <i className="fa fa-trash delete" aria-hidden="true" onClick={this.deleteTodoHandler}></i>
              </div>
          )
          })}
        
      </div>
    );
  }
}
