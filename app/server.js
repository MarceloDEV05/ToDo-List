const express = require('express')
const app =  express()
const port = 3232

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`)
})