import axios from 'axios'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
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
  const [cookies] = useCookies(['token'])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const submitHandler = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/todos`,
        { title, description },
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
    <Modal title='Add New Group' isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className='space-y-5 mb-6'>
        <TextField
          label='Task Name'
          placeholder='Type your Task'
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          label='Description'
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className='flex justify-end gap-3'>
        <Button intent='outline' onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button onClick={submitHandler}>Submit</Button>
      </div>
    </Modal>
  )
}

export default AddNewGroup
