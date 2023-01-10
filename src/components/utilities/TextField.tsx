interface IProps {
  label: string
  placeholder: string
  secure?: boolean
  onChange: (e: any) => void
  defaultValue?: string
}

function TextField(props: IProps) {
  const { label, placeholder, onChange, defaultValue, secure } = props

  return (
    <div className='grid w-80 text-[#404040]'>
      <label htmlFor='id' className='mb-2 text-xs'>
        {label}
      </label>
      <input
        id={label}
        type={secure ? 'password' : 'text'}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        className='py-2 px-4 border-2 border-[#E0E0E0] text-sm placeholder:text-[#9E9E9E] placeholder:text-sm rounded-lg active:border-[#01959F] focus:outline-none focus:border-[#01959F]'
      />
    </div>
  )
}

export default TextField
