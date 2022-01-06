const path = require('path')
const router = require('express').Router()

const rootDirectory = require('../util/path')

router.get('/', (req,res,next)=>{
    res.sendFile(path.join(rootDirectory, 'views', 'index.html'))
})

module.exports = router