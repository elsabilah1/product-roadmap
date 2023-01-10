import { Menu } from '@headlessui/react'
import Icon from './utilities/Icon'

interface IProps {
  name: string
  icon: string
  onClick?: () => void
}

function MenuItem(props: IProps) {
  const { name, icon, onClick } = props

  return (
    <Menu.Item
      as='button'
      className='group flex items-center gap-5 w-full text-left font-semibold text-sm text-[#333333] hover:text-[#01959F]'
      onClick={onClick}
    >
      <Icon
        iconName={icon}
        className='stroke-[#333333] fill-[#333333] group-hover:fill-[#01959F] group-hover:stroke-[#01959F]'
      />
      {name}
    </Menu.Item>
  )
}

export default MenuItem
