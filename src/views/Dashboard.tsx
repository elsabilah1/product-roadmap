import GroupTaskCard from '@/components/GroupTaskCard'
import Layout from '@/components/Layout'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'

interface IData {
  id: string
  title: string
  description: string
}

function Dashboard() {
  const [cookies] = useCookies(['token'])
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/todos`, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      })
      setData(res.data)
    }
    getData()
  }, [data])

  return (
    <Layout>
      <div className='flex gap-4 overflow-x-auto'>
        {data.map((item: IData) => (
          <GroupTaskCard
            id={item.id}
            title={item.title}
            description={item.description}
            key={item.id}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Dashboard
