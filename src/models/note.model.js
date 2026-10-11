const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema (

    {
        title: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        }
    },{
        timestamps: true
    }
)

const noteModel = mongoose.model("Note", noteSchema)

module.exports = noteModel