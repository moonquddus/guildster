import React from 'react'
import styled from 'styled-components'
import { IUser, IState } from '../../redux/reducers'
import { connect } from 'react-redux'
import apiHandler from '../../lib/apiHandler'
import { logout, Action } from '../../redux/actions'
import { Dispatch } from 'redux'
import { Link } from 'react-router-dom'
import treasureChest from '../../assets/treasurechest.png'

const MenuContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: -35px;
  left: 0;
  margin: 10% 0 0;
`

const InnerMenu = styled.div`
  display: flex;
  width: 1000px;
  max-width: 90%;
  margin: 0 auto;
  align-content: stretch;
`

const Left = styled.div`
  text-align: left;
  flex-grow: 1;
`

const Right = styled.div`
  text-align: right;
  flex-grow: 1;
`

const MenuTab = styled.div`
  display: inline-block;
  padding: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #d3411a;
  font-size: 20px;
  color: #efc78c;
  font-weight: bold;
  margin: 0 5px;
  text-transform: uppercase;
  vertical-align: middle;
  float: ${props => props.theme.position || 'none'};
  cursor: pointer;

  a, span {
    display: inline-block;
    color: #efc78c;
    text-decoration: none;
    padding: 10px 25px;
  }

  & img {
    max-height: 20px;
    width: auto;
    vertical-align: middle;
    margin-right: 5px;
  }
`

interface GMProps {
  user: IUser,
  dispatch: Dispatch<Action>
}
const GuildMenu = (props: GMProps) => {
  const { user, dispatch } = props

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault()
    apiHandler.logOutOfAccount().then(() => {
      dispatch(logout({}))
    })
  }

  return (
    <MenuContainer>
      <InnerMenu>
        <Left>
          <MenuTab><span><img src={treasureChest} />{user.guild.gold}</span></MenuTab>
        </Left>
        <Right>
          <MenuTab><Link to='/home'><i className='icofont-home' /></Link></MenuTab>
          <MenuTab><Link to='/new-character'><i className='icofont-ui-love-add' /></Link></MenuTab>
          <MenuTab onClick={handleLogout}><span><i className='icofont-logout' /></span></MenuTab>
        </Right>
      </InnerMenu>
    </MenuContainer>
  )
}

const mapStateToProps = (state: IState) => {
  return { 
      user: state.user
  }
}
export default connect(mapStateToProps)(GuildMenu)
