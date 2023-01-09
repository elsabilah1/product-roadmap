import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode } from 'react'
import Icon from './Icon'

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  title: string
  children: ReactNode
}

function Modal(props: IProps) {
  const { isOpen, setIsOpen, title, children } = props

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-[#404040]/50' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='max-w-md transform overflow-hidden rounded-[10px] bg-white shadow transition-all'>
                <Dialog.Title
                  as='div'
                  className='flex justify-between items-center p-6'
                >
                  <h3 className='text-lg font-bold text-[##1D1F20]'>{title}</h3>
                  <button onClick={() => setIsOpen(false)}>
                    <Icon iconName='close' />
                  </button>
                </Dialog.Title>

                <div className='px-6 pb-6'>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
