import React, { Component } from 'react';
import TodoCard from './TodoCard';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isClicked: true,
      inputValue: "",
      listOfTodos: []
    }
  }

  handleClick = () => {
    this.state.isClicked ? 
      this.setState({isClicked : false}) : 
        this.setState({isClicked: true})
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = (event) => {
      event.preventDefault()
      this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
      this.setState({inputValue: ""})
  }

  deleteItem = (index) => {
    console.log("was clicked", index)
    let copyOfList = this.state.listOfTodos
    copyOfList.splice(index, 1)
    this.setState({listOfTodos: [...copyOfList]})
  }

  componentDidMount() {
    console.log("runs on mount")
    console.log(this.state.isClicked);
  }

  componentDidUpdate() {
    console.log("runs on update")
    console.log(this.state.isClicked);
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}> 
          <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
          <button type="submit" onClick={(this.handleClick)}>Submit here</button>
        </form>
        <ol>{this.state.listOfTodos.map((todo, index) => {
          return <TodoCard key={index} index={index} title={todo} clickToRemove={this.deleteItem} />
        })}</ol>
      </div>
      );
    }
  }

export default App;
