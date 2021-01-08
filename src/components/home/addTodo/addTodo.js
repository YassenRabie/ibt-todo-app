import React, { useState } from 'react'
import AddTodoModal from './addTodoModal'

const AddTodo = () => {
   const [modalOpen, setModalOpen] = useState(false)

   const toogleModal = () => {
      setModalOpen(!modalOpen)
   }

   return (
      <div className="add-todo flex">
         <button onClick={toogleModal} className="btn">New Task</button>
         <AddTodoModal isOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
   )
}

export default AddTodo
