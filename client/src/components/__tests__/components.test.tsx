import React from 'react'
import renderer from 'react-test-renderer'

import components from '../'

const { HealthBar, StatBar, FormError } = components

test('ActionBar renders correctly', () => {
  const { ActionBar } = components
  const output = renderer
    .create(<ActionBar>Testing</ActionBar>)
    .toJSON();
  expect(output).toMatchSnapshot()
});

test('AppHeader renders correctly', () => {
  const { AppHeader } = components
  const output = renderer
    .create(<AppHeader>My Header</AppHeader>)
    .toJSON();
  expect(output).toMatchSnapshot()
})

test('SubHeader renders correctly', () => {
  const { SubHeader } = components
  const output = renderer
    .create(<SubHeader>My Subheader</SubHeader>)
    .toJSON();
  expect(output).toMatchSnapshot()
})

test('Button renders correctly', () => {
  const { Button } = components
  const output = renderer
    .create(<Button type='button'>My Button</Button>)
    .toJSON();
  expect(output).toMatchSnapshot()
})

test('Card renders correctly', () => {
  const { Card } = components
  const output = renderer
    .create(<Card>This is a card.</Card>)
    .toJSON();
  expect(output).toMatchSnapshot()
})

test('Input w/ FloatingLabel renders correctly', () => {
  const { FormContainer, FloatingLabel, Input, Label } = components
  const output = renderer
    .create(
    <FormContainer>
      <FloatingLabel>
        <Input type='text' name='test' placeholder='Test Input' />
        <Label htmlFor='test'>Test Input:</Label>
      </FloatingLabel>
    </FormContainer>
    )
    .toJSON();
  expect(output).toMatchSnapshot()
})

test('Select renders correctly', () => {
  const { FormContainer, Select } = components
  const options = [
    {value: 'test1', name: 'Testing 1'},
    {value: 'test2', name: 'Testing 2'},
    {value: 'test3', name: 'Testing 3'}
  ]
  const setOption = () => false
  const output = renderer
    .create(
      <FormContainer>
        <Select label='Class' options={options} selectedOption='test2' setSelectedOption={setOption} />
      </FormContainer>
    )
    .toJSON();
  expect(output).toMatchSnapshot()
})

test('SimpleGrid renders correctly', () => {
  const { SimpleGrid, Left, Right } = components
  const output = renderer
    .create(
      <SimpleGrid>
        <Left>
          The left-hand side of the grid
        </Left>
        <Right>
          The right-hand side of the grid
        </Right>
      </SimpleGrid>
    )
    .toJSON();
  expect(output).toMatchSnapshot()
})

test('HealthBar renders at 100%', () => {
  const { HealthBar } = components
  const output = renderer
    .create(<HealthBar hp={100} max={100} />)
    .toJSON();
  expect(output).toMatchSnapshot()
})

test('HealthBar renders at 50%', () => {
  const { HealthBar } = components
  const output = renderer
    .create(<HealthBar hp={50} max={100} />)
    .toJSON();
  expect(output).toMatchSnapshot()
})

test('HealthBar renders at 0%', () => {
  const { HealthBar } = components
  const output = renderer
    .create(<HealthBar hp={0} max={100} />)
    .toJSON();
  expect(output).toMatchSnapshot()
})

test('StatBar renders at 100%', () => {
  const { StatBar } = components
  const output = renderer
    .create(<StatBar label='HIGH STAT' stat={100} max={100} />)
    .toJSON();
  expect(output).toMatchSnapshot()
})

test('StatBar renders at 50%', () => {
  const { StatBar } = components
  const output = renderer
    .create(<StatBar label='MID STAT' stat={50} max={100} />)
    .toJSON();
  expect(output).toMatchSnapshot()
})

test('StatBar renders at 0%', () => {
  const { StatBar } = components
  const output = renderer
    .create(<StatBar label='LOW STAT' stat={0} max={100} />)
    .toJSON();
  expect(output).toMatchSnapshot()
})
