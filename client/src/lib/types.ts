export interface ISkill {
  name: string
  damage: number
}

export interface ICharacter {
  _id: string
  name: string
  occupation: string
  portrait: number
  hp: number
  health: number
  strength: number
  magic: number
  agility: number
  dexterity: number
  luck: number
  stamina: number
  focus: number
  skills: ISkill[]
}

export interface IGuild {
  _id?: string
  name?: string
  gold?: number
  characters?: ICharacter[]
}

export interface IUser {
  _id: string
  name: string
  email: string
  guild: IGuild
}

export interface IState {
  preflightComplete: false
  isLoggedIn: boolean
  user: IUser
}