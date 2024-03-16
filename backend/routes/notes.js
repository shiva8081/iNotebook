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


// ROUTE 1: get all the notes: POST "/api/notes/addnotes". Login required

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
        const note = new note({
            title, description, tag, user: req.user.id
        })
        const savedNote = await note.save();
        res.json(savedNote)
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

})

module.exports = router 