import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import TodoItem from './todoItem'
import moment from "moment"

const TodoList = () => {
   const { todoItems } = useContext(GlobalContext)

   return (
      <div className="todo-list">
         <h6 className="title">This is your tasks</h6>
         {!todoItems.length ?
            <p className="msg">Your tasks will show here...</p>
            :
            todoItems.map((element) => {
               return <TodoItem todo={element} key={element.id} />
            })
         }
      </div>
   )
}

export default TodoList
