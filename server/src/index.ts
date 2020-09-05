import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import router from './api-routes'

const app = express()
const port = 8080 // Default port to listen

const apiRoutes = router
app.use('/api', apiRoutes)

app.use(bodyParser.urlencoded({
   extended: true
}))

app.use(bodyParser.json())

// Added check for DB connection
const db = mongoose.connection
if(!db) {
    console.log('Error connecting db')
}
else {
    console.log('Db connected successfully')
}

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('API server is up and running!')
})

app.listen(port, () => {
  console.log(`API server started at http://localhost:${ port }`)
})
