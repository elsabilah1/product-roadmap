import axios from 'axios'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import Button from '../utilities/Button'
import Modal from '../utilities/Modal'
import TextField from '../utilities/TextField'

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  id: string
}

function CreateTask(props: IProps) {
  const { isOpen, setIsOpen, id } = props
  const [cookies] = useCookies(['token'])
  const [name, setName] = useState('')
  const [progress, setProgress] = useState(0)

  const submitHandler = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/todos/${id}/items`,
        { name, progress_percentage: progress },
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      )
      setIsOpen(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal title='Create Task' isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className='space-y-5 mb-6'>
        <TextField
          label='Task Name'
          placeholder='Type your Task'
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label='Progress'
          placeholder='0%'
          onChange={(e) => setProgress(e.target.value)}
          progressField
        />
      </div>
      <div className='flex justify-end gap-3'>
        <Button intent='outline' onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button onClick={submitHandler}>Save Task</Button>
      </div>
    </Modal>
  )
}

export default CreateTask
