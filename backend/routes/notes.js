const express = require('express');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const router = express.Router();
// ROUTE 1: get all the notes: GET "/api/notes/fetchalluser". Login required

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })

        res.json(notes)
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

})



// ROUTE 2: add notes: POST "/api/notes/addnotes". Login required

router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'enter a valid description').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // If there are errors, return Bad request and the errors

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote)
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

})


// ROUTE 3: add notes: put "/api/notes/updatenote". Login required

router.put('/updatenote/:id', fetchuser, async (req, res) => {

    const { title, description, tag } = req.body;
    //create newnote object
    const newNote = {};
    if (title) { newNote.title = title }
    if (description) { newNote.description = description }
    if (tag) { newNote.tag = tag }


    //find the note to be updated and update it

    // const note=Notes.findByIdAndUpdate()

    let note = await Notes.findById(req.params.id);
    if (!note) { return res.status(400).send("not found") }
    if (note.user.toString() != req.user.id) { return res.status(401).send("not allowed 1") }

    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
    
    res.json({ note });




})


// ROUTE 4: delete notes: delete "/api/notes/updatenote". Login required

router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    const { title, description, tag } = req.body;
    


    //find the note to be updated and update it

    

    let note = await Notes.findById(req.params.id);
    if (!note) { return res.status(400).send("not found") }
    if (note.user.toString() != req.user.id) { return res.status(401).send("not allowed 1") }

    note = await Notes.findByIdAndDelete(req.params.id)

    res.json({"success":"note has been deleted",note:note});

})
module.exports = router 