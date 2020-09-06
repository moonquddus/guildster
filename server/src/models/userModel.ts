import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import validator from 'validator'
import { IGuild } from './guildModel'

export interface IUser extends mongoose.Document {
  name: string
  email: string
  password: string
  guild: IGuild
  tokens: string[]
  create_date: Date
  generateAuthToken: () => string
}

export interface IUserModel extends mongoose.Model<IUser> {
  findByCredentials: (email: string, password: string) => IUser
  getUser: (callback: (err: Error, users: IUser[]) => void, limit?: number) => void
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: (value: string) => validator.isEmail(value)
  },
  password: {
    type: String,
    required: true,
    minLength: 7
  },
  guild: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guild'
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }],
  create_date: {
      type: Date,
      default: Date.now
  }
})

userSchema.pre<IUser>('save', async function (next) {
  // Hash the password before saving the user model
  const user = this
  if (user.isModified('password')) {
    const newSalt = await bcrypt.genSalt(10)
    const newHash = await bcrypt.hash(user.password, newSalt)
    user.password = newHash
    next()
  }
})

userSchema.methods.generateAuthToken = async function () {
  // Generate an auth token for the user
  const user = this
  const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
  user.tokens = user.tokens.concat({token})
  await user.save()
  return token
}

userSchema.statics.findByCredentials = async (email: string, password: string) => {
  // Search for a user by email and password.
  const user = await User.findOne({ email })
  if (!user) {
    throw new Error('Invalid login credentials')
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if (!isPasswordMatch) {
    throw new Error('Invalid login credentials')
  }
  return user
}

userSchema.statics.getUser = (callback: (err: Error, users: IUser[]) => void, limit: number = 10) => {
  User.find(callback).limit(limit)
}

export const User: IUserModel = mongoose.model<IUser, IUserModel>('user', userSchema)
