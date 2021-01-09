import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../context/GlobalState'
import { v4 as uuid } from "uuid"
import moment from 'moment'
import { DatePicker } from "antd"

const initalState = {
   description: '',
   date: moment(Date.now()).format("DD-MM-YYYY hh:mm a")
}

const AddTodoForm = ({ setModalOpen }) => {
   const [todoData, setTodoData] = useState(initalState)
   const { addTodo } = useContext(GlobalContext)

   const onChange = (e) => {
      setTodoData({ ...todoData, [e.target.name]: e.target.value })
   }

   const changeDate = (value) => {
      console.log(value)
      setTodoData({
         ...todoData,
         date: value === null ? moment(Date.now()).format("DD-MM-YYYY hh:mm a") : moment(value).format("DD-MM-YYYY hh:mm a")
      })
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      const newTodo = {
         id: uuid(),
         description: todoData.description,
         completed: false,
         date: todoData.date
      }

      addTodo(newTodo)
      setTodoData(initalState)
      setModalOpen(false)
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <span className="title center-text">Add new Task</span>
            <label htmlFor="date">Task Description</label>
            <input type="text" className="input" name="description" placeholder="e.g. Meeting..." required onChange={onChange} value={todoData.description} />
            <label htmlFor="date">Task Date</label>
            <DatePicker name="date" clearIcon={false} showNow={false} format="DD-MM-YYYY hh:mm a" className="input" defaultValue={moment(new Date())} showHour={true} showMinute={true} showSecond={false} showTime={true} onChange={(value) => changeDate(value)} />
            <input type="submit" className="btn" value="Add Task" />
         </form>
      </div>
   )
}

export default AddTodoForm