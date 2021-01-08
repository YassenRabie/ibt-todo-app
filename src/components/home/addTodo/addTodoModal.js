import React from 'react'
import Modal from 'react-modal'
import AddTodoForm from './addTodoForm'

const AddTodoModal = ({ isOpen, setModalOpen }) => {
   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={() => setModalOpen(false)}
         className="add-todo-modal"
         ariaHideApp={false}
      >
         <AddTodoForm setModalOpen={setModalOpen} />
      </Modal>
   )
}

export default AddTodoModal
