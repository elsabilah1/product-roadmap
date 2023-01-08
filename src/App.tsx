import Layout from '@/components/Layout'
import Button from '@/components/utilities/Button'

function App() {
  return (
    <Layout>
      <div>contents</div>
      <div className='space-y-3'>
        <Button>Save Task</Button>
        <Button intent='secondary'>Delete</Button>
        <Button intent='outline'>Cancel</Button>
      </div>
    </Layout>
  )
}

export default App
