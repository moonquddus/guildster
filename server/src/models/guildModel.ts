import mongoose from 'mongoose'
import { IUser } from './userModel'
import { ICharacter } from './characterModel'

export interface IGuild extends mongoose.Document {
  name: string
  creator: IUser
  characters: ICharacter[]
}

const guildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  characters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character'
  }]
})

export const Guild = mongoose.model<IGuild>('guild', guildSchema)