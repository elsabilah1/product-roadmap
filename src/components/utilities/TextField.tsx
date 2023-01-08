interface IProps {
  label: string
  placeholder: string
  onChange: (e: any) => void
}

function TextField(props: IProps) {
  const { label, placeholder, onChange } = props

  return (
    <div className='grid w-80 text-[#404040]'>
      <label htmlFor='id' className='mb-2 text-xs'>
        {label}
      </label>
      <input
        id={label}
        type='text'
        placeholder={placeholder}
        onChange={onChange}
        className='py-2 px-4 border-2 border-[#E0E0E0] text-sm placeholder:text-[#9E9E9E] placeholder:text-sm rounded-lg active:border-[#01959F] focus:outline-none focus:border-[#01959F]'
      />
    </div>
  )
}

export default TextField
