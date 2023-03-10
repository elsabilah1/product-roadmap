import DropdownMenu from './DropdownMenu'
import Icon from './utilities/Icon'
import ProgressBar from './utilities/ProgressBar'

interface IProps {
  groupTaskId: string
  taskId: string
  name: string
  progress: number
}

function TaskCard(props: IProps) {
  const { name, progress, groupTaskId, taskId } = props

  return (
    <div className='border border-[#E0E0E0] rounded-[4px] p-4 bg-[#FAFAFA]'>
      <h3 className='border-b border-dashed border-[#E0E0E0] text-sm font-bold leading-6 pb-2 mb-3'>
        {name}
      </h3>
      <div className='flex justify-between items-center gap-7'>
        <div className='w-full flex gap-3'>
          <ProgressBar progress={progress} />
          <span className='text-xs text-[#757575]'>
            {progress === 100 ? <Icon iconName='checklist' /> : progress + '%'}
          </span>
        </div>
        <DropdownMenu
          id={groupTaskId}
          taskId={taskId}
          name={name}
          progress={progress}
        />
      </div>
    </div>
  )
}

export default TaskCard
