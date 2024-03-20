import React,{useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import noteContext from '../context/notes/noteContext';

export const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const {editNote} = context;
   const {note ,updateNote}=props;
  return (
    <div className='col-md-3'>
        
        <div className="card my-3" style={{ marginRight: '10px' }}>
  
  <div className="card-body">
    <div className='d-flex aligh-item-center'>
    <h5 className="card-title">{note.title}</h5>
    <FontAwesomeIcon icon={faTrash} className='mx-2 pointer' onClick={()=>{deleteNote(note._id)}} />
    <FontAwesomeIcon icon={faPenToSquare} className='mx-2 pointer 'onClick={()=>{updateNote(note)}} />
    </div>
    <p className="card-text">{note.description}</p>
    
  </div>
</div>
    </div>
  )
}
