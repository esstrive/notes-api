const express = require ("express")

const router = express.Router()

const {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
} = require("../controllers/note.controller")

router.post("/notes", createNote)

router.get("/notes", getNotes)

router.get("/notes/:id", getNote)

router.patch("/notes/:id", updateNote)

router.delete("/notes/:id", deleteNote)

module.exports = router