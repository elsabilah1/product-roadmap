import axios from 'axios'
import { useCookies } from 'react-cookie'
import Button from '../utilities/Button'
import Modal from '../utilities/Modal'

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  id: string
  taskId: string
}

function DeleteTask(props: IProps) {
  const { isOpen, setIsOpen, id, taskId } = props
  const [cookies] = useCookies(['token'])

  const submitHandler = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/todos/${id}/items/${taskId}`,
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
    <Modal
      title='Delete Task'
      icon='exclamation'
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <div className='mb-6'>
        <p className='text-sm text-[#404040] leading-6'>
          Are you sure want to delete this task? your action can’t be reverted.
        </p>
      </div>
      <div className='flex justify-end gap-3'>
        <Button intent='outline' onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button intent='secondary' onClick={submitHandler}>
          Delete
        </Button>
      </div>
    </Modal>
  )
}

export default DeleteTask
