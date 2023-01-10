import { useState } from 'react'
import CreateTask from './modals/CreateTask'
import TaskCard from './TaskCard'
import Icon from './utilities/Icon'

interface IProps {
  title: string
  description?: string
}

function GroupTaskCard(props: IProps) {
  const { title, description } = props
  const [createModal, setCreateModal] = useState(false)

  return (
    <>
      <CreateTask isOpen={createModal} setIsOpen={setCreateModal} />
      <div className='border rounded-[4px] flex flex-col gap-2 p-4'>
        <h2 className='border rounded-[4px] py-[2px] px-2 w-fit text-xs leading-5'>
          {title}
        </h2>
        <p className='text-xs font-bold leading-5'>{description}</p>
        <div className='grid gap-2'>
          <TaskCard title='Re-designed the zero-g doggie bags. No more spills!' />
        </div>
        <div>
          <button
            onClick={() => setCreateModal(true)}
            className='flex gap-[5px] items-center text-xs leading-5'
          >
            <Icon iconName='plus-circle' svgProp={{ width: 16, height: 16 }} />
            New Task
          </button>
        </div>
      </div>
    </>
  )
}

export default GroupTaskCard
