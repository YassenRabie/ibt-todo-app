import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import TodoItem from './todoItem'

const TodoList = () => {
   const { todoItems } = useContext(GlobalContext)

   return (
      <div className="todo-list">
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
