import React from 'react'
import styled from 'styled-components'

const HealthContainer = styled.span`
  display: block;
  width: 100%;
  height: 20px;
  background: #3d414c;
  border: solid 3px #3d414c;
  border-radius: 5px;
  position: relative;
  margin: 15px 0 15px;
`

const CurrentHealth = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background: ${props => {
    if (props.theme.health >= 66){
      return '#01bf29'
    }
    else if (props.theme.health >= 33){
      return 'yellow'
    }
    else{
      return 'red'
    }
  }};
  width: ${props => props.theme.health ? props.theme.health : '100'}%;
  height: 100%;
`

interface HBProps {
  hp: number
  max: number
}
const HealthBar = (props: HBProps) => {
  const {hp, max} = props
  const healthPercentage = (10 / max) * 100
  return (
    <HealthContainer>
      <CurrentHealth theme={{health: healthPercentage}}></CurrentHealth>
    </HealthContainer>
  )
}

export default HealthBar