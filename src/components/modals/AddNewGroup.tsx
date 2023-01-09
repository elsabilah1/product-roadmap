import { useState } from 'react'
import Button from '../utilities/Button'
import Modal from '../utilities/Modal'
import TextArea from '../utilities/TextArea'
import TextField from '../utilities/TextField'

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

function AddNewGroup(props: IProps) {
  const { isOpen, setIsOpen } = props
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')

  return (
    <Modal title='Add New Group' isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className='space-y-5 mb-6'>
        <TextField
          label='Task Name'
          placeholder='Type your Task'
          onChange={(e) => setTask(e.target.value)}
        />
        <TextArea
          label='Description'
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='flex justify-end gap-3'>
        <Button intent='outline'>Cancel</Button>
        <Button>Submit</Button>
      </div>
    </Modal>
  )
}

export default AddNewGroup
