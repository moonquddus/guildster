import mongoose, { mongo } from 'mongoose'
import { IGuild } from './guildModel'

export interface ICharacter extends mongoose.Document {
  name: string
  guild: IGuild
  health: number
  strength: number
  speed: number
  skills: {
    name: string
    damage: number
  }
}

const skillSchema = new mongoose.Schema({
  name: {
    type: String
  },
  damage: {
    type: Number
  }
})

const characterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  guild: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guild'
  },
  health: {
    type: Number,
  },
  strength: {
    type: Number,
  },
  speed: {
    type: Number,
  },
  skills: [skillSchema]
})

export const Character = mongoose.model<ICharacter>('character', characterSchema)
