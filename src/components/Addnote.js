import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

export const Addnote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleclick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({ title: "", description: "", tag: "" })
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <div className='container my-5'>

                <h1>ADD a Note</h1>

                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="title" value={note.title} onChange={onChange} minLength={5} required aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">description</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" value={note.description} name='description'minLength={5} required  onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">TAG</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" value={note.tag} name='tag' minLength={5} required onChange={onChange} />
                    </div>
                    
                    <button disabled={note.title.length<5||note.description<5} type="submit" className="btn btn-primary" onClick={handleclick}>Add note</button>
                </form>
            </div>
        </div>
    )
}
