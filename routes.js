const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)

        conn.query('SELECT * FROM books', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('INSERT INTO books SET ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

            res.send('book inserted')
        })
    })
})

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('DELETE FROM books WHERE id = ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('book deleted')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn) => {
        if(err) return res.send(err)
        // console.log(req.body)
        conn.query('UPDATE books SET ? WHERE id = ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)

            res.send('book updated')
        })
    })
})

module.exports = routes