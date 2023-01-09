import { useState } from 'react'
import Button from '../utilities/Button'
import Modal from '../utilities/Modal'
import TextField from '../utilities/TextField'

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

function CreateTask(props: IProps) {
  const { isOpen, setIsOpen } = props
  const [task, setTask] = useState('')

  return (
    <Modal title='Create Task' isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className='space-y-5 mb-6'>
        <TextField
          label='Task Name'
          placeholder='Type your Task'
          onChange={(e) => setTask(e.target.value)}
        />
        {/* progress field */}
      </div>
      <div className='flex justify-end gap-3'>
        <Button intent='outline' onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button>Save Task</Button>
      </div>
    </Modal>
  )
}

export default CreateTask
