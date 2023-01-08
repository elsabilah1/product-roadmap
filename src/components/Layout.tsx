import { ReactNode } from 'react'
import Icon from '@/components/utilities/Icon'

interface IProps {
  children: ReactNode
}

function Layout(props: IProps) {
  const { children } = props

  return (
    <div className='min-h-screen flex flex-col'>
      <header className='py-[18px] px-5 border-b border-[#E0E0E0] flex gap-[10px] items-center'>
        <h1 className='font-bold text-lg text-[#1E1F21]'>Product Roadmap</h1>
        <button className='bg-[#01959F] flex items-center gap-1 text-white text-xs font-bold py-2 px-4 rounded-lg shadow'>
          <Icon iconName='plus' />
          Add New Group
        </button>
      </header>
      <main className='flex-1 px-6 pt-6'>{children}</main>
    </div>
  )
}

export default Layout
