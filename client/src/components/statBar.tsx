import React from 'react'
import styled from 'styled-components'

const StatBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 25px;
`

const StatContainer = styled.span`
  display: block;
  width: 100%;
  height: 20px;
  background: #3d414c;
  border: solid 3px #3d414c;
  border-radius: 5px;
  position: relative;
  margin: 0;
`

const CurrentStat = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background: #01bf29;
  width: ${props => props.theme.stat ? props.theme.stat : '100'}%;
  height: 100%;
`

const StatLabel = styled.label`
  width: 80px;
  font-weight: bold;
  text-align: center;
  height: auto;
  vertical-align: middle;
`

interface SBProps {
  stat: number
  max: number
  label?: string
}
const StatBar = (props: SBProps) => {
  const {stat, max, label} = props
  const statPercentage = ((stat || 0) / max) * 100
  return (
    <StatBarWrapper>
      {label ? <StatLabel>{label}</StatLabel> : null}
      <StatContainer>
        <CurrentStat theme={{stat: statPercentage}}></CurrentStat>
      </StatContainer>
      {label ? <StatLabel>{stat || 0}</StatLabel> : null}
    </StatBarWrapper>
  )
}

export default StatBar