import { Request, Response } from 'express'
import { IRequest, IToken } from '../middleware/auth'
import { IUser, User } from '../models/userModel'
import { ICharacter, Character } from '../models/characterModel'
import { Guild } from '../models/guildModel'

const rollStat = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

const addCharacter = (req: IRequest, res: Response) => {
  const { user } = req
  const { guild } = user

  const character = new Character()
  character.name = req.body.name
  character.portrait = req.body.portrait
  character.occupation = req.body.occupation
  
  // TODO: Make this a bit more dynamic depending on character occupation
  character.health = rollStat(10, 20)
  character.strength = rollStat(1, 20)
  character.magic = rollStat(1, 20)
  character.speed = rollStat(1, 20)
  character.skills = []

  character.save()
  guild.characters.push(character)
  guild.save(err => {
    if (err){
      res.send(err)
    }
    else{
      res.status(201).json(guild)
    }
  })
}

export default { addCharacter }