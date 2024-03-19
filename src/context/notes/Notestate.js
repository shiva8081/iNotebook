import { useState } from "react";
import noteContext from "./noteContext";



const Notestate = (props) => {

    const initialState=[
        {
            "_id": "65f5defc40552f8389f99af0",
            "user": "65f5de4828195cc3e1a08c8e",
            "title": "my name is shiva",
            "description": "i have to work hard",
            "tag": "personal",
            "date": "2024-03-16T18:03:40.126Z",
            "__v": 0
        },
        {
            "_id": "65f841b7bc497d4da84e0236",
            "user": "65f5de4828195cc3e1a08c8e",
            "title": " is shiva",
            "description": "i have to work hard",
            "tag": "yoylo",
            "date": "2024-03-18T13:29:27.498Z",
            "__v": 0
        },
        {
            "_id": "65f841b8bc997d4da874e0238",
            "user": "65f5de4828195cc3e1a08c8e",
            "title": " is shiva",
            "description": "i have to work hard",
            "tag": "yoylo",
            "date": "2024-03-18T13:29:28.792Z",
            "__v": 0
        },
        {
            "_id": "65f841b9bc997d4da84e1023a",
            "user": "65f5de4828195cc3e1a08c8e",
            "title": " is shiva",
            "description": "i have to work hard",
            "tag": "yoylo",
            "date": "2024-03-18T13:29:29.814Z",
            "__v": 0
        },
        {
            "_id": "65f841babc997d4d2a84e023c",
            "user": "65f5de4828195cc3e1a08c8e",
            "title": " is shiva",
            "description": "i have to work hard",
            "tag": "yoylo",
            "date": "2024-03-18T13:29:30.962Z",
            "__v": 0
        }
    ]
    const [notes, setnotes] = useState(initialState);

    //ADD a note
const addNote=(title,description,tag)=>{
//todo api call
    note={
        "_id": "65f841babc997d4d2a84e023c",
        "user": "65f5de4828195cc3e1a08c8e",
        "title": " adding function",
        "description": "note added",
        "tag": "yoylo",
        "date": "2024-03-18T13:29:30.962Z",
        "__v": 0
    };
setnotes(notes.push(note))
}

    //delete a note
const deleteNote=(id)=>{
    
}

    //edit a note
    const editNote=(id)=>{
    
    }

    return (
        <noteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}





export default Notestate;