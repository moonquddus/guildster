import mongoose, { mongo } from 'mongoose'
import { IGuild } from './guildModel'

export interface ICharacter extends mongoose.Document {
  name: string
  portrait: number
  occupation: string
  health: number
  strength: number
  magic: number
  speed: number
  skills: {
    name: string
    damage: number
  }[]
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
  portrait: {
    type: Number
  },
  occupation: {
    type: String,
    required: true
  },
  health: {
    type: Number
  },
  strength: {
    type: Number
  },
  magic: {
    type: Number
  },
  speed: {
    type: Number
  },
  skills: [skillSchema]
})

export const Character = mongoose.model<ICharacter>('character', characterSchema)
