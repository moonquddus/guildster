import React, { useState } from 'react'
import styled from 'styled-components'
import Label from './label'

const DropDownContainer = styled.div`
  position: relative;
  margin-top: 10px;

  & label {
    position: absolute;
    opacity: 0.8;
    z-index: 1;
    font-size: 12px;
    top: -15px;
    left: 15px;
  }
`;
const DropDownHeader = styled.div`
  background: #ffdfb0;
  outline: none;
  border: none;
  border-radius: 0px;
  box-shadow: none;
  font-size: 16px;
  margin: 0 0 20px;
  padding: 10px 15px;
  width: 100%;
  cursor: pointer;
  position: relative;
  color: #000;
  &:hover {
    background: #f7d6a6;
  }
`;

const DropDownList = styled.ul`
  position: absolute;
  top: 40px;
  left: 0px;
  display: block;
  background: #ffdfb0;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  z-index: 10;
  `;
  
const ListItem = styled("li")`
  margin: 0;
  list-style: none;
  display: block;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 16px;
  &:hover {
    background: #f7d6a6;
  }
  &.active {
    color: #000;
  }
`;

interface SelectProps {
  options: {
    value: string
    name: string
  }[]
  label: string
  selectedOption: string
  setSelectedOption: (value: string) => void
}

const Select = (props: SelectProps) => {
  const { label, options, selectedOption, setSelectedOption } = props

  const [isOpen, setIsOpen] = useState(false)
  const toggleSelect = () => setIsOpen(!isOpen)

  const onOptionClicked = (value: string) => () => {    
    setSelectedOption(value)
    setIsOpen(false)
  }

  const getSelectedName = () => {
    const foundName = options.filter((option) => option.value === selectedOption)
    return foundName.length ? foundName[0].name : ''
  }

  return (
    <DropDownContainer>
      <Label>{props.label}</Label>
      <DropDownHeader onClick={toggleSelect}>{ getSelectedName() }</DropDownHeader>
      {isOpen && (
        <DropDownList>
          {options.map(option => (
            <ListItem className={option.value === selectedOption ? 'active' : ''} onClick={onOptionClicked(option.value)} key={option.value}>
              {option.name}
            </ListItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  )
}

export default Select