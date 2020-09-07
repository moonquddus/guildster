import mongoose from 'mongoose'
import { ICharacter } from './characterModel'
import { IUser } from './userModel'

export interface IGuild extends mongoose.Document {
  name: string
  characters: ICharacter[]
  gold: number
}

const guildSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  characters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'character'
  }],
  gold: {
    type: Number
  }
})

export const Guild = mongoose.model<IGuild>('guild', guildSchema)
