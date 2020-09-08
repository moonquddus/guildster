import React, {useState} from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import apiHandler from '../../lib/apiHandler'
import { IState } from '../../redux/reducers'
import { connect } from 'react-redux'
import { Action, updateUser } from '../../redux/actions'
import { Dispatch } from 'redux'
import components from '../../components'
import PortraitSelector from './portraitSelector'
import { Redirect } from 'react-router-dom'

// TODO: Move this someplace else
const occupations = [
  { value: 'assassin', name: 'Assassin' }, // Rogue/Attack
  { value: 'mage', name: 'Mage' }, // Elemental Mage/Balanced
  { value: 'noble', name: 'Noble' }, // Tank/Balanced
  { value: 'paladin', name: 'Paladin' }, // Tank/Support
  { value: 'priest', name: 'Priest' }, // Light Mage/Support
  { value: 'soldier', name: 'Soldier' }, // Fighter/Balanced
  { value: 'thief', name: 'Thief' }, // Rogue/Support
  { value: 'vanguard', name: 'Vanguard' }, // Tank/Attack
  { value: 'warlock', name: 'Warlock' }, // Dark Mage/Attack
  { value: 'warrior', name: 'Warrior' }, // Fighter/Attack
  { value: 'wizard', name: 'Wizard' } // Mage/Balanced
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

type FormValues = {
  charName: string
  occupation: string
  portrait: number
};

type RegisterProps = {
  dispatch: Dispatch<Action>
}
const NewCharacter = (props: RegisterProps) => {
  const { dispatch } = props
  const { ActionBar, AppHeader, Button, Card, FormContainer, FloatingLabel, FormError, Input, Label, SimpleGrid, Left, Right, Select } = components
  const { handleSubmit, register, errors } = useForm({
    defaultValues: {
      charName: pickRandom(randomNames)
    }
  })
  const [occupation, setOccupation] = useState(pickRandom(occupations).value)
  const [portrait, setPortrait] = useState(0)
  const [formComplete, setFormComplete] = useState(false)

  const onSubmit: SubmitHandler<FormValues> = data => {
    const { charName } = data
    apiHandler.addNewCharacter(charName, occupation, portrait).then((response) => {
      if (response.success){
        dispatch(updateUser({
          data: response.data
        }))
        setFormComplete(true)
      }
    })
  }

  return (
    <Card>
      { formComplete && <Redirect to='/home' /> }
      <AppHeader>Add New Character</AppHeader>
      <FormContainer>
        <form method='post' onSubmit={handleSubmit(onSubmit)}>
          <SimpleGrid>
            <Left>
              <FloatingLabel>
                <Input type='text' name='charName' placeholder='Character Name' ref={register({
                  required: 'Your character needs a name!',
                  pattern: {
                    value: /^[a-zA-Z\s,.'-\pL]+$/,
                    message: 'Your character needs a name'
                  }
                })} />
                <Label htmlFor='charName'>Character Name:</Label>
                <FormError>{errors.charName && errors.charName.message}</FormError>
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
