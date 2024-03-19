import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

export const Addnote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleclick = (e) => {
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
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
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="Title" onChange={onChange} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">description</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name='description' onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">TAG</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name='tag' onChange={onChange} />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
                </form>
            </div>
        </div>
    )
}
