import mongoose from 'mongoose'

export interface IUser extends mongoose.Document {
  name: string
  email: string
  gender: string
  phone: string
  create_date: Date
}

const userSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  email: {
      type: String,
      required: true
  },
  gender: String,
  phone: String,
  create_date: {
      type: Date,
      default: Date.now
  }
})

export const User = mongoose.model<IUser>('user', userSchema)
export const getUser = (callback: (err: any, users: IUser[]) => void, limit: number = 10) => {
  User.find(callback).limit(limit)
}
