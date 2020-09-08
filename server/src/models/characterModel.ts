import mongoose, { mongo } from 'mongoose'
import { IGuild } from './guildModel'

export interface ICharacter extends mongoose.Document {
  name: string
  portrait: number
  occupation: string
  hp: number
  health: number
  strength: number
  magic: number
  agility: number
  dexterity: number
  luck: number
  stamina: number
  focus: number
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
  hp: {
    type: Number
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
  agility: {
    type: Number
  },
  dexterity: {
    type: Number
  },
  luck: {
    type: Number
  },
  stamina: {
    type: Number
  },
  focus: {
    type: Number
  },
  skills: [skillSchema]
})

export const Character = mongoose.model<ICharacter>('character', characterSchema)
