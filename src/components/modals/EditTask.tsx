import axios from 'axios'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import Button from '../utilities/Button'
import Modal from '../utilities/Modal'
import TextField from '../utilities/TextField'

interface IProps {
  id: string
  taskId: string
  nameValue: string
  progressValue: number
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

function EditTask(props: IProps) {
  const { isOpen, setIsOpen, id, taskId, nameValue, progressValue } = props
  const [cookies] = useCookies(['token'])
  const [name, setName] = useState(nameValue)
  const [progress, setProgress] = useState(progressValue.toString())

  const submitHandler = async () => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_URL}/todos/${id}/items/${taskId}`,
        { target_todo_id: taskId, name, progress_percentage: progress },
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
    <Modal title='Edit Task' isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className='space-y-5 mb-6'>
        <TextField
          label='Task Name'
          placeholder='Type your Task'
          onChange={(e) => setName(e.target.value)}
          defaultValue={name}
        />
        <TextField
          label='Progress'
          placeholder='0%'
          onChange={(e) => setProgress(e.target.value)}
          progressField
          defaultValue={progress}
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

export default EditTask
