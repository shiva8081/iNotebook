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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNWRlNDgyODE5NWNjM2UxYTA4YzhlIn0sImlhdCI6MTcxMDYxMjA2NX0.KcgT7nWaFjFw2WRUN9Qs8gQYCTss0VkpW8R1tBpLEVY"
            },


        });

        const json = response.json();

        console.log(json);
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
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNWRlNDgyODE5NWNjM2UxYTA4YzhlIn0sImlhdCI6MTcxMDYxMjA2NX0.KcgT7nWaFjFw2WRUN9Qs8gQYCTss0VkpW8R1tBpLEVY"
            },

            body: JSON.stringify({ title, description, tag }),
        });

        const json = response.json();
        console.log('adding a new note')
        const note = {
            "_id": "65f841babcd997d4d2a84e023c",
            "user": "65f5de4828195cc3e1a08c8e",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-03-18T13:29:30.962Z",
            "__v": 0
        };
        setnotes(notes.concat(note))
    }

    //delete a note
    const deleteNote = (id) => {
        //todo api call
        console.log("deleting the node with id:" + id)
        const newnote = notes.filter((note) => { return note._id !== id })

        setnotes(newnote);
    }

    //edit a note
    const editNote = async (id, title, description, tag) => {

        //api call
        const response = await fetch(`${host}/api/notes/updatenotes/${id}`, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmNWRlNDgyODE5NWNjM2UxYTA4YzhlIn0sImlhdCI6MTcxMDYxMjA2NX0.KcgT7nWaFjFw2WRUN9Qs8gQYCTss0VkpW8R1tBpLEVY"
            },

            body: JSON.stringify({ title, description, tag }),
        });
        const json = response.json();


        // logic to edit a note
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element.id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }

        }


    }

    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
            {props.children}
        </noteContext.Provider>
    )
}





export default Notestate;