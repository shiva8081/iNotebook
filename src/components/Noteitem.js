import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export const Noteitem = (props) => {
   const {note}=props;
  return (
    <div className='col-md-3'>
        
        <div className="card my-3" style={{ marginRight: '10px' }}>
  
  <div className="card-body">
    <div className='d-flex aligh-item-center'>
    <h5 className="card-title">{note.title}</h5>
    <FontAwesomeIcon icon={faTrash} className='mx-2 pointer' />
    <FontAwesomeIcon icon={faPenToSquare} className='mx-2 pointer' />
    </div>
    <p className="card-text">{note.description}</p>
    
  </div>
</div>
    </div>
  )
}
