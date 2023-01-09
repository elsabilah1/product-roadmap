import Layout from '@/components/Layout'
import GroupTaskCard from './components/GroupTaskCard'

function App() {
  return (
    <Layout>
      <div className='grid grid-cols-4 gap-4'>
        <GroupTaskCard title='Group Task 1' description='Jan - Feb' />
        <GroupTaskCard title='Group Task 2' description='Jan - Feb' />
        <GroupTaskCard title='Group Task 3' description='Jan - Feb' />
        <GroupTaskCard title='Group Task 4' description='Jan - Feb' />
      </div>
    </Layout>
  )
}

export default App
