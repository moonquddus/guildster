import React, {useState} from 'react'
import apiHandler from '../../lib/apiHandler'
import { IState } from '../../redux/reducers'
import { connect } from 'react-redux'
import { Action, initUser } from '../../redux/actions'
import { Dispatch } from 'redux'
import components from '../../components'
import PortraitSelector from './portraitSelector'

type RegisterProps = {
  dispatch: Dispatch<Action>
}

// TODO: Move this someplace elsewhere
const occupations = [
  { value: 'assassin', name:'Assassin' }, // Rogue/Attack
  { value: 'mage', name:'Mage' }, // Elemental Mage/Balanced
  { value: 'noble', name:'Noble' }, // Tank/Balanced
  { value: 'paladin', name:'Paladin' }, // Tank/Support
  { value: 'priest', name:'Priest' }, // Light Mage/Support
  { value: 'soldier', name:'Soldier' }, // Fighter/Balanced
  { value: 'thief', name:'Thief' }, // Rogue/Support
  { value: 'vanguard', name:'Vanguard' }, // Tank/Attack
  { value: 'warlock', name:'Warlock' }, // Dark Mage/Attack
  { value: 'warrior', name:'Warrior' }, // Fighter/Attack
  { value: 'wizard', name:'Wizard' } // Mage/Balanced
]
const randomNames = [
'Vaphior',
'Uzegoris',
'Dinyll',
'Hamorith',
'Mibaris',
'Phubaris',
'Innero',
'Detosh',
'Annixyll',
'Ilokelis',
'Ovras',
'Orius',
'Amonar',
'Unomazz',
'Uvras',
'Umazz',
'Rapius',
'Rhophior',
'Uvineth',
'Undonior',
'Phebaris',
'Itowyn',
'Amihaen',
'Ibine',
'Iwaelle',
'Ilezith',
'Ezora',
'Imnuffea',
'Ibess',
'Idasinore'
]
const pickRandom = (array: any[]) => array[Math.floor(Math.random() * array.length)];

const NewCharacter = (props: RegisterProps) => {
  const { dispatch } = props
  const { ActionBar, AppHeader, Button, Card, FormContainer, FloatingLabel, Input, Label, SimpleGrid, Left, Right, Select } = components

  const [occupation, setOccupation] = useState(pickRandom(occupations).value)
  const [charName, setCharName] = useState(pickRandom(randomNames))
  const [portrait, setPortrait] = useState(0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    apiHandler.addNewCharacter(charName, occupation, portrait).then((response) => {
      console.log('AAAARGH', response)
    })
  }

  return (
    <Card>
      <AppHeader>Add New Character</AppHeader>
      <FormContainer>
        <form method='post' onSubmit={handleSubmit}>
          <SimpleGrid>
            <Left>
              <FloatingLabel>
                <Input type='text' name='charName' placeholder='Character Name' value={charName} onChange={e => setCharName(e.target.value)} />
                <Label htmlFor='charName'>Character Name:</Label>
              </FloatingLabel>
              <Select label={'Class'} options={occupations} selectedOption={occupation} setSelectedOption={setOccupation} />
            </Left>
            <Right>
              <PortraitSelector selectedOption={portrait} setSelectedOption={setPortrait} />
            </Right>
          </SimpleGrid>
          <ActionBar>
              <Button type='submit'>Add New Character</Button>
          </ActionBar>
        </form>
      </FormContainer>
    </Card>
  )
}
const mapStateToProps = (state: IState) => {
  return {}
}
export default connect(mapStateToProps)(NewCharacter)
