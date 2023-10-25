/* eslint-disable react/prop-types */
import {} from 'react'
import './Modal.css'

const Modal = ({isOpen, children }) => {
  

  if (!isOpen) return null;
  
  return (
    <div className='modal-overlay'>
      <div className="modal-content" style={{padding:"30px"}}>
        {children}

      </div>
    </div>
  )
}

export default Modal