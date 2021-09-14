import React from "react";

function TodoCard(props) {
  return (
    <li>{props.title}
      <button onClick={() => {props.clickToRemove(props.index)}}>Remove</button>
    </li>
    
  )
}

export default TodoCard