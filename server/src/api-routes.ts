// Filename: api-routes.js
// Initialize express router
import { Router } from 'express'
import characterController from './controllers/characterController'
import userController from './controllers/userController'
import auth, { IRequest } from './middleware/auth'

const router = Router()
// Set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to my personal API and stuff'
    })
})

router.get('/csrf-token', (req, res) => {
    res.json({ csrfToken: req.csrfToken() })
})

router.get('/users/me', auth, async (req: IRequest, res) => {
    // View logged in user profile
    const { user } = req
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        guild: user.guild
    })
})

router.route('/users/login')
    .post(userController.loginUser)

router.route('/users/register')
    .post(userController.newUser)

router.route('/users/:user_id')
    .get(userController.viewUser)

router.route('/users/me/logout')
    .all(auth)
    .post(userController.logoutUser, auth)

router.route('/users/me/logoutall')
    .all(auth)
    .post(userController.logoutAllUser)

router.route('/characters/new')
    .all(auth)
    .post(characterController.addCharacter)

// Export API routes
export default router
