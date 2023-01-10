import axios from 'axios'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import CreateTask from './modals/CreateTask'
import TaskCard from './TaskCard'
import Icon from './utilities/Icon'

interface IProps {
  id: string
  title: string
  description?: string
}

interface IData {
  id: string
  name: string
  progress_percentage: number
}

function GroupTaskCard(props: IProps) {
  const { id, title, description } = props
  const [cookies] = useCookies(['token'])
  const [data, setData] = useState([])
  const [createModal, setCreateModal] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/todos/${id}/items`,
        {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        }
      )
      setData(res.data)
    }
    getData()
  }, [data])

  return (
    <>
      <CreateTask id={id} isOpen={createModal} setIsOpen={setCreateModal} />
      <div className='h-fit border rounded-[4px] flex flex-col gap-2 p-4 min-w-[320px] mb-40'>
        <h2 className='border rounded-[4px] py-[2px] px-2 w-fit text-xs leading-5'>
          {title}
        </h2>
        <p className='text-xs font-bold leading-5'>{description}</p>
        <div className='grid gap-2'>
          {data.length > 0 ? (
            data.map((item: IData) => (
              <TaskCard
                title={item.name}
                progress={item.progress_percentage}
                key={item.id}
              />
            ))
          ) : (
            <div className='border border-[#E0E0E0] rounded-[4px] py-2 px-4 bg-[#FAFAFA] text-sm text-[#757575] leading-6'>
              No Task
            </div>
          )}
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
