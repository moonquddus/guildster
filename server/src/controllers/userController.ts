import { Request, Response } from 'express'
import { IRequest, IToken } from '../middleware/auth'
import { IUser, User } from '../models/userModel'

const indexUser = (req: Request, res: Response) => {
  User.getUser((err, users) => {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      })
    }
    res.json({
      status: 'success',
      message: 'Users retrieved successfully',
      data: users
    })
  })
}

const loginUser = async (req: Request, res: Response) => {
    // Login a registered user
    try {
      const { email, password } = req.body
      const user = await User.findByCredentials(email, password)
      if (!user) {
          return res.status(401).send({error: 'Login failed! Check authentication credentials'})
     }
      const token = await user.generateAuthToken()
      res.send({ user, token })
  } catch (error) {
      res.status(400).send(error)
  }
}

const logoutUser = async (req: IRequest, res: Response) => {
    // Log user out of the application
    try {
      req.user.tokens = req.user.tokens.filter((token: any) =>
          token.token !== req.token)
      await req.user.save()
      res.send()
  } catch (error) {
      res.status(500).send(error)
  }
}

const logoutAllUser = async (req: IRequest, res: Response) => {
  // Log user out of all devices
  try {
    req.user.tokens.splice(0, req.user.tokens.length)
    await req.user.save()
    res.send()
  } catch (error) {
    res.status(500).send(error)
  }
}

const newUser = async (req: Request, res: Response) => {
  const user = new User()
  user.name = req.body.name ? req.body.name : user.name
  user.password = req.body.password
  user.email = req.body.email
  const token = await user.generateAuthToken()

  // Save the contact and check for errors
  user.save(err =>
    res.status(201).json({
      message: 'New user created!',
      data: {
        user,
        token
      }
    })
  )
}

const viewUser = (req: Request, res: Response) => {
  User.findById(req.params.user_id, (err, user: IUser) => {
    if (err) {
      res.send(err)
    }
    res.json({
        message: 'User details loading..',
        data: user
    })
  })
}

const updateUser = (req: Request, res: Response) => {
  User.findById(req.params.user_id, (err, user: IUser) => {
    if (err) {
      res.send(err)
    }
    user.name = req.body.name ? req.body.name : user.name
    user.email = req.body.email

    // Save the user and check for errors
    user.save((saveErr) => {
      if (saveErr) {
        res.json(saveErr)
      }
      res.json({
          message: 'User Info updated',
          data: user
      })
    })
  })
}

const deleteUser = (req: Request, res: Response) => {
  User.remove({
    _id: req.params.user_id
  }, (err) => {
    if (err) {
      res.send(err)
    }
    res.json({
      status: 'success',
      message: 'User deleted'
    })
  })
}

export default { indexUser, loginUser, logoutUser, logoutAllUser, newUser, viewUser, updateUser, deleteUser}
