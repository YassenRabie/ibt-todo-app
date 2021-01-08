import React, { createContext, useReducer, useEffect } from "react"
import AppReducer from './AppReducer'
import moment from 'moment'

// Geting TODOS from localstorage
const localState = JSON.parse(localStorage.getItem("TodoState"))

// Inital State
const initialState = {
   todoItems: localState === null ? [] : localState.todoItems,
   searchText: localState === null ? '' : localState.searchText,
   dateFilter: moment(Date.now()).format("DD-MM-YYYY"),
   filterType: "text"
}

// Create Context
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initialState)

   // Updating localstorage
   useEffect(() => {
      localStorage.setItem("TodoState", JSON.stringify(state))
   }, [state])

   // Actions
   const removeTodo = (id) => {
      dispatch({
         type: 'REMOVE_TODO',
         payload: id
      })
   }

   const addTodo = (todo) => {
      dispatch({
         type: 'ADD_TODO',
         payload: todo
      })
   }

   const toogleCompleted = (id) => {
      dispatch({
         type: 'TOOGLE_COMPLETED',
         payload: id
      })
   }

   const updateSearchText = (text) => {
      dispatch({
         type: 'UPDATE_SEARCH_TEXT',
         payload: text
      })
   }

   const updateDateFilter = (date) => {
      dispatch({
         type: 'UPDATE_DATE_FILTER',
         payload: date
      })
   }

   const updateFilterType = (filter) => {
      dispatch({
         type: 'UPDATE_FILTER_TYPE',
         payload: filter
      })
   }

   const filterdItems = () => {
      var newTodoItems = state.todoItems

      if (state.filterType === "text") {
         newTodoItems = state.todoItems.filter((todo) => {
            return todo.description.includes(state.searchText)
         })
      }

      if (state.filterType === "date") {
         newTodoItems = state.todoItems.filter((todo) => {
            return todo.date.includes(state.dateFilter)
         })
      }

      return newTodoItems
   }

   return (
      <GlobalContext.Provider value={{
         todoItems: filterdItems(),
         searchText: state.searchText,
         dateFilter: state.dateFilter,
         removeTodo,
         addTodo,
         updateSearchText,
         updateFilterType,
         toogleCompleted,
         updateDateFilter
      }}>
         {children}
      </GlobalContext.Provider>
   )
}