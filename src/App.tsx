import Layout from '@/components/Layout'
import TextField from '@/components/utilities/TextField'
import TextArea from '@/components/utilities/TextArea'
import { useEffect, useState } from 'react'

function App() {
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    console.log({ task, description })
  }, [task, description])

  return (
    <Layout>
      <div className='space-y-3'>
        <TextField
          label='Task Name'
          placeholder='Type your Task'
          onChange={(e) => setTask(e.target.value)}
        />
        <TextArea
          label='Description'
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
    </Layout>
  )
}

export default App
