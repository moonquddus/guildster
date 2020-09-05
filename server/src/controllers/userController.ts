// ContactController.js// Import contact model

import { NextFunction, Request, Response } from 'express'
import { getUser, IUser, User } from '../models/userModel'

const indexUser = (req: Request, res: Response) => {
  getUser((err, users) => {
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

const newUser = (req: Request, res: Response) => {
  const user = new User()
  user.name = req.body.name ? req.body.name : user.name
  user.gender = req.body.gender
  user.email = req.body.email
  user.phone = req.body.phone

  // Save the contact and check for errors
  user.save(err =>
    ({
      message: 'New user created!',
      data: user
    }))
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
    user.gender = req.body.gender
    user.email = req.body.email
    user.phone = req.body.phone

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

export default { indexUser, newUser, viewUser, updateUser, deleteUser}
