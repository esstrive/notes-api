const express = require ("expresss")

const app = express()
app.use(express.json());


app .get("/", (req, res)=>{
    res.json({
        message: "Notes API is running "
    })
})
module.exports = app()