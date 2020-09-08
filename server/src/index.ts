import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import csrf from 'csurf'
import express, { Request, Response } from 'express'
import { request } from 'http'
import mongoose from 'mongoose'
import router from './api-routes'

const app = express()
const port = process.env.PORT

app.use(cors())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(cookieParser())

// A middleware function with no mount path. This code is executed for every request to the router
app.use((req: Request, res: Response, next: () => void) => {
    const timestamp = new Date(Date.now())
    console.log('API CALL - "' + req.path + '" at:', timestamp.toLocaleString())
    next()
})

app.use(csrf({
    cookie: true
}))

try {
    mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
}
catch(err) {
    console.log('ERROR CONNECTING', err)
}

// Added check for DB connection
const db = mongoose.connection
if(!db) {
    console.log('Error connecting db')
}
else {
    console.log('Db connected successfully')
}

const apiRoutes = router
app.use('/api', apiRoutes)

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('API server is up and running!')
})

app.listen(port, () => {
    console.log(`API server started at http://localhost:${ port }`)
})
