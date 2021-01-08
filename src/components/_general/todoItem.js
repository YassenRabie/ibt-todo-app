import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { BiTrash } from "react-icons/bi"
import { AiOutlineCheck } from "react-icons/ai"

const TodoItem = ({ todo }) => {
   const { removeTodo, toogleCompleted } = useContext(GlobalContext)

   return (
      <div className="todo-item">
         <button
            onClick={() => toogleCompleted(todo.id)}
            className={`btn btn-circle ${todo.completed ? "" : "btn-gray"}`}
         >
            <AiOutlineCheck />
         </button>
         <div className="todo-info">
            <p className={`todo-description ${todo.completed ? "completed" : ""}`}>{todo.description}</p>
            <span className="todo-date">{todo.date}</span>
         </div>
         <button
            onClick={() => removeTodo(todo.id)}
            className="btn btn-circle btn-gray remove-todo"
         >
            <BiTrash />
         </button>
      </div>
   )
}

export default TodoItem
