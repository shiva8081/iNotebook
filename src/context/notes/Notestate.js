import { useState } from "react";
import noteContext from "./noteContext";



const Notestate = (props) => {
    const host = "http://localhost:4000"

    const initialState = []
    const [notes, setnotes] = useState(initialState);


    //GET all notes
    const getNotes = async () => {
        //todo api call
        //api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },


        });

        const json = await response.json();

        // console.log(json);
        setnotes(json);
    }

    //ADD a note
    const addNote = async (title, description, tag) => {
        //todo api call
        //api call
        const response = await fetch(`${host}/api/notes/addnotes`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },

            body: JSON.stringify({ title, description, tag}),
        });

        const note = await response.json();
        // console.log(note);
        console.log('adding a new note')
        
        setnotes(notes.concat(note))
    }

    //delete a note
    const deleteNote = async(id) => {
        //api call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },

            // body: JSON.stringify({ title, description, tag }),
        });
        // const json = await response.json();
        // console.log(json);
        //todo api call
        console.log("deleting the node with id:" + id)
        const newnote = notes.filter((note) => { return note._id !== id })

        setnotes(newnote);
    }

    //edit a note
    const editNote = async (id, title, description, tag) => {

        //api call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token")
            },

            body: JSON.stringify({ title, description, tag }),
        });
        // const json = response.json();
        // console.log(json);

       let newNotes = JSON.parse(JSON.stringify(notes));
        // logic to edit a note
        for (let index = 0; index < notes.length; index++) {
            // const element = notes[index];
            console.log(notes[index])
            if (newNotes[index]._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
            break;
        }
            
        }
        setnotes(newNotes)
        console.log(notes)
    }

    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}





export default Notestate;