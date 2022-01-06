const path = require('path')
const router = require('express').Router()
const fs = require('fs')

const rootDirectory = require('../util/path')

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'index.html'))
})

router.get('/write-message', (req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'write-message.html'))
})

router.post('/message', (req, res, next) => {
    const message = req.body.message
    fs.writeFile('lect-01.txt', message, (err) => {
    if (err) throw err
    res.statusCode = 302
    res.redirect('/')
})
    console.log(req.body)

})



module.exports = router