import React from "react";
import TodoItem from "./TodoItem.js"
import todosData from "./todosData"

function App() {
  const todos = todosData.map(item => <TodoItem key={item.id} todo={item}/>)
  return (
    <div className="todo-list">
      {todos}
    </div>
  )
}

export default App;
