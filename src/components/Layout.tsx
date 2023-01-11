import Icon from '@/components/utilities/Icon'
import Button from '@/components/utilities/Button'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import AddNewGroup from './modals/AddNewGroup'

interface IProps {
  children: React.ReactNode
}

function Layout(props: IProps) {
  const { children } = props
  const [cookies, setCookies] = useCookies(['token'])
  const [isOpen, setIsOpen] = useState(false)

  const signOut = () => {
    setCookies('token', '')
  }

  return (
    <>
      <AddNewGroup isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='max-w-[1400px] min-h-screen mx-auto flex flex-col'>
        <header className='py-[18px] px-5 border-b border-[#E0E0E0] flex gap-[10px] items-center'>
          <h1 className='font-bold text-lg text-[#1E1F21]'>Product Roadmap</h1>
          {cookies.token && (
            <>
              <Button onClick={() => setIsOpen(true)}>
                <Icon iconName='plus' />
                Add New Group
              </Button>
              <Button intent='secondary' onClick={signOut}>
                Sign Out
              </Button>
            </>
          )}
        </header>
        <main className='flex-1 p-6'>{children}</main>
      </div>
    </>
  )
}

export default Layout
