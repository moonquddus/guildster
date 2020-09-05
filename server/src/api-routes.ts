// Filename: api-routes.js
// Initialize express router
import { Router } from 'express'

const router = Router()
// Set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to my personal API and shizzz'
    })
})

// Export API routes
export default router
