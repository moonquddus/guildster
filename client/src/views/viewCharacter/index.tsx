import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ICharacter, IState } from '../../redux/reducers'
import portraits from '../../assets/portraits'
import { Link, useParams } from 'react-router-dom'
import components from '../../components'
import { connect } from 'react-redux'

const CharacterInfo = styled.div`
  max-width: 250px;
  margin: 0 auto 50px;
`

const CharacterPortrait = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto 10px;
`

const CharacterLevel = styled.p`
  text-align: center;
  margin: 20 auto 0;
  font-size: 32px;
  text-transform: capitalize;
`

const CharacterStats = styled.div`
  margin: 0 auto 50px;
`

interface VCProps {
  characters?: ICharacter[]
}
const ViewCharacter = (props: VCProps) => {
  const { characters } = props
  const { AppHeader, SubHeader, Card, ActionBar, Button, SimpleGrid, Left, Right, HealthBar, StatBar } = components
  const { id } = useParams()
  const [character, setCharacter] = useState()

  useEffect(() => {
    if (!characters){
      return
    }
    const foundCharacters = characters.filter((character: ICharacter) => character._id === id)
    if (foundCharacters.length){
      setCharacter(foundCharacters[0])
    }
  }, [characters, id])
  return character ? 
    <Card>
      <AppHeader>{character.name}</AppHeader>
      <SimpleGrid>
        <Left>
          <CharacterInfo>
            <CharacterPortrait src={portraits[character.portrait]} />
            <HealthBar hp={character.health} max={character.health} />
            <CharacterLevel>Lv.1 {character.occupation}</CharacterLevel>
          </CharacterInfo>
        </Left>
        <Right>
          <CharacterStats>
            <StatBar label={'CON'} stat={character.health} max={20} />
            <StatBar label={'STR'} stat={character.strength} max={20} />
            <StatBar label={'MAG'} stat={character.magic} max={20} />
            <StatBar label={'AGI'} stat={character.agility} max={20} />
            <StatBar label={'DEX'} stat={character.dexterity} max={20} />
            <StatBar label={'LCK'} stat={character.luck} max={20} />
            <StatBar label={'STA'} stat={character.stamina} max={20} />
            <StatBar label={'FOC'} stat={character.focus} max={20} />
          </CharacterStats>
          <SubHeader>Skills: N/A</SubHeader>
        </Right>
      </SimpleGrid>
      <ActionBar>
        <Link to={'/home'}><Button type='button'>Go Back</Button></Link>
      </ActionBar>
    </Card>    
    : 
    <Card>
      Loading character...
    </Card>
  
}

const mapStateToProps = (state: IState) => {
  return { 
    characters: state.user ? state.user.guild.characters : []
  }
}
export default connect(mapStateToProps)(ViewCharacter)
