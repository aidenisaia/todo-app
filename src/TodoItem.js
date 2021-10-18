import React from "react"

class TodoItem extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" checked={this.props.todo.completed}/>
        <p>{this.props.todo.text}</p>
      </div>
    )
  }
}

export default TodoItem