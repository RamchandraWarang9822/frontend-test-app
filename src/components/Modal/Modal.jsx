/* eslint-disable react/prop-types */
import {} from 'react'
import './Modal.css'

const Modal = ({isOpen, closeModal, children }) => {
  

  if (!isOpen) return null;
  
  return (
    <div className='modal-overlay'>
      <div className="modal-content">
        {children}
        <button className='button modal-close' onClick={closeModal}>Close</button>

      </div>
    </div>
  )
}

export default Modal