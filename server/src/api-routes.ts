// Filename: api-routes.js
// Initialize express router
import { Router } from 'express'
import userController from './controllers/userController'

const router = Router()
// Set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to my personal API and shizzz'
    })
})

router.route('/users')
    .get(userController.indexUser)
    .post(userController.newUser)

router.route('/users/:user_id')
    .get(userController.viewUser)
    .patch(userController.updateUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

// Export API routes
export default router
