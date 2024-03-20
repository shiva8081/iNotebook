import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext';
import { Noteitem } from './Noteitem';
import { Addnote } from './Addnote';

export const Notes = () => {
    const context = useContext(noteContext);
    const [note, setNote] = useState({ id:"",etitle: "", edescription: "", etag: "" });
    const { notes, getNotes ,editNote } = context;
    // console.log(notes);
    // console.log(notes.length);
    // console.log(typeof notes);

    useEffect(() => {
        return () => {
            getNotes();
        };
    }, []);

    const ref = useRef(null)
    const refclose = useRef(null)
    const updateNote = (currentNote) => {
        ref.current.click()
        // setNote(currentNote);
        setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
    }

    const handleclick = (e) => {
        e.stopPropagation();
        console.log('Handle click function called');
        // refclose.current.click();
        console.log(note);
        editNote(note.id,note.etitle,note.edescription,note.etag);
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Addnote />

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">edit note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" value={note.etitle} name="etitle" onChange={onChange} aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text" minLength={5} required></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">description</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" value={note.edescription} name='edescription' onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">TAG</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" value={note.etag} name='etag' onChange={onChange} minLength={5} required />
                                </div>


                            </form>
                        </div>
                        <div className="modal-footer">
                            <button  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length<5||note.edescription<5} onClick={handleclick} type="button" className="btn btn-primary" >update your note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-2'>
                <h1>your notes</h1>
                <div className='conatiner'>{notes.length===0 && 'No Notes to display'}  </div>

                {notes.map((note) => {
                    return <Noteitem key={note._id} updateNote={updateNote} note={note} />;
                })}
            </div>
        </>

    )
}
