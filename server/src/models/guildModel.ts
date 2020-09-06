import mongoose from 'mongoose'
import { ICharacter } from './characterModel'
import { IUser } from './userModel'

export interface IGuild extends mongoose.Document {
  name: string
  characters: ICharacter[]
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
  }]
})

export const Guild = mongoose.model<IGuild>('guild', guildSchema)
