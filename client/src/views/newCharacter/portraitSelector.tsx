import React from 'react'
import styled from 'styled-components'
import portraits from '../../assets/portraits'
import components from '../../components'

const PortraitContainer = styled.div`
  background: linear-gradient(30deg, rgba(89,84,86,1) 0%, rgba(89,84,86,1) 15%, rgba(102,101,99,1) 15%, rgba(102,101,99,1) 50%, rgba(208,204,204,1) 50%, rgba(208,204,204,1) 65%, rgba(236,229,232,1) 65%, rgba(236,229,232,1) 85%, rgba(242,241,239,1) 85%, rgba(242,241,239,1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 160px;
  text-align: center;
  position: relative;
  margin: 0 auto 30px;
`

const PortraitImage = styled.img`
  z-index: 2;
  width: 150px;
  height: 150px;
  display: inline-block;
`

const ControlBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

interface PSProps {
  selectedOption: number
  setSelectedOption: (value: number) => void
}

const PortraitSelector = (props: PSProps) => {
  const { selectedOption, setSelectedOption } = props
  const { Button, SubHeader } = components

  const prevOption = () => selectedOption > 0 ? setSelectedOption(selectedOption - 1) : setSelectedOption(portraits.length - 1)
  const nextOption = () => selectedOption < (portraits.length - 1) ? setSelectedOption(selectedOption + 1) : setSelectedOption(0)

  return (
    <React.Fragment>
      <PortraitContainer>
        <PortraitImage src={ portraits[selectedOption] } />
      </PortraitContainer>
      <ControlBar>
        <Button type='button' theme={{height: '5px'}} onClick={prevOption}>&laquo;</Button>
        <SubHeader>Portrait</SubHeader>
        <Button type='button' theme={{height: '5px'}} onClick={nextOption}>&raquo;</Button>
      </ControlBar>
    </React.Fragment>
  )
}

export default PortraitSelector