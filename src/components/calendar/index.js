import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import TodoList from '../_general/todoList'
import CalendarFilter from './calendarFilter'

const Filter = () => {
   const { updateFilterType } = useContext(GlobalContext)

   useEffect(() => {
      updateFilterType('date')
   }, [])

   return (
      <div className="container">
         <CalendarFilter />
         <h1 className="title">This is your tasks</h1>
         <TodoList />
      </div>
   )
}

export default Filter
