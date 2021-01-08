import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import TodoList from '../_general/todoList'
import AddTodo from './addTodo/addTodo'
import SearchTodo from './SearchTodo'

const Home = () => {
   const { updateFilterType } = useContext(GlobalContext)

   useEffect(() => {
      updateFilterType('text')
   }, [])
   return (
      <div className="container">
         <AddTodo />
         <SearchTodo />
         {/* <h1 className="title">This is your tasks</h1> */}
         <TodoList />
      </div>
   )
}

export default Home
