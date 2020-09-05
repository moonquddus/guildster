// Filename: api-routes.js
// Initialize express router
import { Router } from 'express'
import userController from './controllers/userController'
import auth, { IRequest } from './middleware/auth'

const router = Router()
// Set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to my personal API and shizzz'
    })
})

router.get('/users/me', auth, async(req: IRequest, res) => {
    // View logged in user profile
    res.send(req.user)
})

router.route('/users/all')
    .get(userController.indexUser)

router.route('/users/login')
    .post(userController.loginUser)

router.route('/users/register')
    .post(userController.newUser)

router.route('/users/:user_id')
    .get(userController.viewUser)
    .patch(userController.updateUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser)

router.route('users/me/logout')
    .post(userController.logoutUser)

router.route('users/me/logoutall')
    .post(userController.logoutAllUser)

// Export API routes
export default router
