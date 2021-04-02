const express = require("express")
const { addListener } = require("../models/todo")
const router = express.Router()
const Todosc = require("../models/todo")

router.get('/list', async(req,res) => {

    try
    {
        const allTasks = await Todosc.find()
        res.json(allTasks)
    }
    catch(err)
    {
        res.send("Error :" + err)
    }
})


router.post('/add',async(req,res) => {
    let createdAt = new Date()
    let deleteAt = new Date(createdAt.valueOf() + (req.body.duration*60000))
    const todo = new Todosc({
        name: req.body.name, 
        description: req.body.description, 
        creator: req.body.creator, 
        duration: req.body.duration, 
        createdat: createdAt,
        deleteat: deleteAt
    })
    try
    {
        const a1 = await todo.save()
        res.json(a1)
    }
    catch(err)
    {
        res.send('Error'+ err)
    }
})


module.exports = router