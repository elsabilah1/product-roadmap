import Icon from '@/components/utilities/Icon'
import Button from '@/components/utilities/Button'
import { useState } from 'react'
import AddNewGroup from './modals/AddNewGroup'
interface IProps {
  children: React.ReactNode
}

function Layout(props: IProps) {
  const { children } = props
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AddNewGroup isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='max-w-[1400px] min-h-screen mx-auto flex flex-col'>
        <header className='py-[18px] px-5 border-b border-[#E0E0E0] flex gap-[10px] items-center'>
          <h1 className='font-bold text-lg text-[#1E1F21]'>Product Roadmap</h1>
          <Button onClick={() => setIsOpen(true)}>
            <Icon iconName='plus' />
            Add New Group
          </Button>
        </header>
        <main className='flex-1 px-6 pt-6'>{children}</main>
      </div>
    </>
  )
}

export default Layout
