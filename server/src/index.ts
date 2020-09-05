import express from 'express'
import router from './api-routes'
const app = express()
const port = 8080 // Default port to listen

const apiRoutes = router
app.use('/api', apiRoutes)

// Define a route handler for the default home page
app.get('/', (req, res) => {
    res.send('API server is up and running!')
})

app.listen(port, () => {
  console.log(`API server started at http://localhost:${ port }`)
})
