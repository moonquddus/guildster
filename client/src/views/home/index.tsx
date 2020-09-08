import React, { useState, useEffect, JSXElementConstructor } from 'react'
import { IState, IUser, IGuild, ICharacter } from '../../redux/reducers'
import { connect } from 'react-redux'
import apiHandler from '../../lib/apiHandler'
import { Dispatch } from 'redux'
import { logout, Action } from '../../redux/actions'
import components from '../../components'
import CharacterCard from '../viewCharacter/card'
import styled from 'styled-components'

const Roster = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  & > * {
    max-width: 33%;
  }
`

type HomeProps = {
  dispatch: Dispatch<Action>,
  user?: IUser
}
const Home = (props: HomeProps) => {
  const { dispatch, user } = props
  const { Card, AppHeader, SubHeader } = components
  const [guild, setGuild] = useState<IGuild>({})

  useEffect(() => {
    if (user && user.guild){
      setGuild(user.guild)
    }
  }, [user])

  const generateCharacters = () => {
    let render: Array<JSX.Element> = []
    if (guild && guild.characters){
      guild.characters.forEach((character: ICharacter) => {
        render.push(
          <CharacterCard key={character._id} character={character} />
        )
      })
    }
    return render
  }

  return (
    <Card>
      <AppHeader>Welcome to {guild.name}</AppHeader>
      <Roster>
        { generateCharacters() }
      </Roster>
    </Card>
  )
}
const mapStateToProps = (state: IState) => {
  return { 
      user: state.user
  }
}
export default connect(mapStateToProps)(Home)
