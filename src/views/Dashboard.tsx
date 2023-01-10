import GroupTaskCard from '@/components/GroupTaskCard'
import Layout from '@/components/Layout'

function Dashboard() {
  return (
    <Layout>
      <div className='grid grid-cols-4 gap-4'>
        <GroupTaskCard title='Group Task 1' description='Jan - Feb' />
      </div>
    </Layout>
  )
}

export default Dashboard
