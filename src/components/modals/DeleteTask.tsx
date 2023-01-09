import Button from '../utilities/Button'
import Modal from '../utilities/Modal'

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

function DeleteTask(props: IProps) {
  const { isOpen, setIsOpen } = props

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
        <Button intent='secondary'>Delete</Button>
      </div>
    </Modal>
  )
}

export default DeleteTask
