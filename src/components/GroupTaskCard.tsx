import Icon from './utilities/Icon'

interface IProps {
  title: string
  description?: string
}

function GroupTaskCard(props: IProps) {
  const { title, description } = props

  return (
    <div className='border rounded-[4px] flex flex-col gap-2 p-4'>
      <h2 className='border rounded-[4px] py-[2px] px-2 w-fit text-xs leading-5'>
        {title}
      </h2>
      <p className='text-xs font-bold leading-5'>{description}</p>
      <div className='grid gap-2'>
        <div className='border'>Task</div>
        <div className='border'>Task</div>
      </div>
      <div>
        <button className='flex gap-[5px] items-center text-xs leading-5'>
          <Icon iconName='plus-circle' svgProp={{ width: 16, height: 16 }} />
          New Task
        </button>
      </div>
    </div>
  )
}

export default GroupTaskCard
