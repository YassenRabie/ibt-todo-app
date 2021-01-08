import React, { useContext, useEffect, useState, useRef } from 'react'
import { GlobalContext } from '../../context/GlobalState'

const SearchTodo = () => {
   const { searchText, updateSearchText } = useContext(GlobalContext)
   const [filterText, setFilterText] = useState(searchText)
   const textInput = useRef(null)

   useEffect(() => {
      setFilterText(filterText)
      updateSearchText(filterText)
   }, [filterText])

   const onChange = (e) => {
      setFilterText(e.target.value)
   }

   return (
      <div className="search-todo">
         <input type="text" className="input" placeholder="Search in your tasks..." value={filterText} ref={textInput} onChange={onChange} />
      </div>
   )
}

export default SearchTodo
