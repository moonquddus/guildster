import React from 'react'
import styled from 'styled-components'
import { ICharacter } from '../../redux/reducers'
import portraits from '../../assets/portraits'
import { Link } from 'react-router-dom'
import Button from '../../components/button'
import HealthBar from '../../components/healthBar'

const CardContainer = styled.div`
  text-align: center;
  width: 250px;
`

const CharacterPortrait = styled.img`
  width: 150px;
`

const CardContent = styled.div`
  background: #d3411a;
  width: 100%;
  margin: -25px 0 60px;
  padding: 30px 15px 30px;
`

const CharacterName = styled.p`
  color: #efc78c;
  font-weight: bold;
  font-size: 26px;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const CharacterLevel = styled.p`
  margin: 0;
  color: #efc78c;
  font-size: 18px;
  text-transform: capitalize;
`

interface CCProps {
  character: ICharacter
}
const CharacterCard = (props: CCProps) => {
  const { character } = props

  return (
    <CardContainer>
      <CharacterPortrait src={portraits[character.portrait]} />
      <CardContent>
        <CharacterName>{character.name}</CharacterName>
        <CharacterLevel>Lv.1 {character.occupation}</CharacterLevel>
        <HealthBar hp={character.health} max={character.health} />
        <Link to={'/view-character/' + character._id}><Button type='button'>Details</Button></Link>
      </CardContent>
    </CardContainer>
  )
}

export default CharacterCard
