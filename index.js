const express = require('express')
const axios = require('axios')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

app.get('/users', async (req, res) => {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users")
    res.status(200).send(users.data)
})

app.get('/posts',async (req, res) => {
    const users = await axios.get("https://jsonplaceholder.typicode.com/posts")
    res.status(200).send(users.data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})