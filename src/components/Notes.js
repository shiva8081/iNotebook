import React, { useContext,useEffect } from 'react'
import noteContext from '../context/notes/noteContext';
import { Noteitem } from './Noteitem';
import { Addnote } from './Addnote';

export const Notes = () => {
    const context = useContext(noteContext);
  const{notes,getNotes}=context;
  useEffect(() => {
   
    return () => {
        getNotes();
    };
  }, []);
    return (
        <>      
        <Addnote/> 
         <div className='row my-2'>
            <h1>your notes</h1>

            {notes.map ((note) => {
                return <Noteitem key={note._id} note={note}/>;
            })}
        </div>
        </>

    )
}
