import Icon from './utilities/Icon'

interface IProps {
  title: string
}

function TaskCard(props: IProps) {
  const { title } = props

  return (
    <div className='border border-[#E0E0E0] rounded-[4px] p-4 bg-[#FAFAFA]'>
      <h3 className='border-b border-dashed border-[#E0E0E0] text-sm font-bold leading-6 pb-2 mb-3'>
        {title}
      </h3>
      <div className='flex justify-between items-center gap-7'>
        <div className='bg-green-500/50 w-full'>progress bar</div>
        <button>
          <Icon iconName='setting' />
        </button>
      </div>
    </div>
  )
}

export default TaskCard
