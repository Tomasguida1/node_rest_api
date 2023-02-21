const express = require('express') 
const routes = express.Router()

routes.get('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if (err) return res.send(err)
    
        conn.query ('SELECT * FROM posts' , (err,rows)=> {
            if (err) return res.send(err)
        
            res.json(rows)
            })
    })
    
})


routes.post('/', (req, res) =>{
    req.getConnection((err, conn)=>{
        if (err) return res.send(err)
    
        conn.query ('INSERT INTO posts set ?',[req.body] , (err,rows)=> {
            if (err) return res.send(err)
        
            res.send("post uploaded successfully")
            })
    })
    
})

routes.delete('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if (err) return res.send(err)
    
        conn.query ('DELETE FROM posts WHERE idposts = ?',[req.params.id] , (err,rows)=> {
            if (err) return res.send(err)
        
            res.send("post deleted successfully")
            })
    })
    
})

routes.put('/:id', (req, res) =>{
    req.getConnection((err, conn)=>{
        if (err) return res.send(err)
    
        conn.query ('UPDATE posts set ? WHERE idposts = ?',[req.body , req.params.id] , (err,rows)=> {
            if (err) return res.send(err)
        
            res.send("post updated successfully")
            })
    })
    
})
module.exports = routes

