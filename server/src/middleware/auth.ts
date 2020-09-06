import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { IUser, User } from '../models/userModel'

export interface IRequest extends Request {
  user: IUser
  token: string | IToken
}

export interface IToken {
  _id: string
  token: string
}

type tokenType = string | IToken

const auth = async (req: IRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, process.env.JWT_KEY)
    try {
        const user: IUser = await User.findOne({ _id: (data as IToken)._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({
          error: 'NOT_AUTHORIZED',
          message: 'You are not authorized to access this.'
        })
    }

}
export default auth
