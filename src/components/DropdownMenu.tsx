import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import DeleteTask from './modals/DeleteTask'
import EditTask from './modals/EditTask'
import Icon from './utilities/Icon'
import MenuItem from './MenuItem'

interface IProps {
  id: string
  taskId: string
  name: string
  progress: number
}

function DropdownMenu(props: IProps) {
  const { id, taskId, name, progress } = props
  const [editModal, setEditModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)

  return (
    <>
      <EditTask
        id={id}
        taskId={taskId}
        nameValue={name}
        progressValue={progress}
        isOpen={editModal}
        setIsOpen={setEditModal}
      />
      <DeleteTask
        id={id}
        taskId={taskId}
        isOpen={deleteModal}
        setIsOpen={setDeleteModal}
      />
      <Menu as='div' className='relative flex'>
        <Menu.Button>
          <Icon iconName='setting' />
        </Menu.Button>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='z-10 absolute -right-4 mt-8 w-80 rounded-md bg-white shadow-lg'>
            <div className='px-4 py-3 space-y-3'>
              <MenuItem name='Move Right' icon='arrow-right' />
              <MenuItem name='Move Left' icon='arrow-left' />
              <MenuItem
                name='Edit'
                icon='edit'
                onClick={() => setEditModal(true)}
              />
              <Menu.Item
                as='button'
                className='group flex items-center gap-5 w-full text-left font-semibold text-sm text-[#333333] hover:text-[#E11428]'
                onClick={() => setDeleteModal(true)}
              >
                <Icon
                  iconName='trash'
                  className='stroke-[#333333] fill-[#333333] group-hover:fill-[#E11428] group-hover:stroke-[#E11428]'
                />
                Delete
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  )
}

export default DropdownMenu
