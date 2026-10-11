const noteModel = require("../models/note.model")


//Create NOTES

async function createNote(req, res){
    try{
        const {title, description} = req.body

        if (!title || !description){
            return res.status(400).json({
                message: "Title and description is required"
            })
        }
        
        const note = await  noteModel.create({
            title,
            description
        })
        res.status(201).json({
            message:"Note created successfully",
            note
        })
    } catch (error){
        res.status(500).json({
            message:"Failed to create notes",
            error: error.message
        })
    }
}


//GET ALL NOTES

async function getNotes(req, res){
    try{
        const notes = await noteModel.find()

        res.status(200).json({
            message: "Notes fetched successfully",
            notes
        })
    } catch(error){
        res.status(500).json({
            message: "Failed to fetch Notes",
            error: error.message

        })
    }
}

//GET ONE NOTE

async function getNote(req, res){
    try{
        const id = req.params.id

        const note = await noteModel.findById(id)

        if(!note){
            return res.status(404).json({
                message:"Note not found"
            })
        }
        res.status(200).json({
            note
        })
    } catch (error){
        res.status(500).json({
            message: "Failed to fetch Note ",
            error: error.message
        })
    }
}

//UPDATE NOTE

async function updateNote(req, res){
    try{
        const id = req.params.id

        const {title, description}= req.body

        const updateNote = await noteModel.findByIdAndUpdate(
        id,
        {
            title,
            description
        },
        {
            new: true,
            runValidators: true

        }
    )
    if (!updateNote){
        return res.status(404).json({
            message: "Note not found"
        })
    }
    res.status(200).json({
        message:"notes update successfully",
        note:updateNote
    })
    } catch(error){
        res.status(500).json({
            message:"Failed to update Note",
            error: error.message
        })
    }  
}

//DELETE NOTE

async function deleteNote(req, res){
    try {
        const id = req.params.id
        
        const deleteNote = await noteModel.findByIdAndDelete(id)

        if(!deleteNote){
            return res.status(404).json({
                message:"Note not found"
            })
        }
        res.status(200).json({
            message:"Note successfully deleted"
        })
    } catch (error){
        res.status(500).json({
            message:"Failed to delete note",
            error: error.message
        })
    }
}

module.exports = {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
}