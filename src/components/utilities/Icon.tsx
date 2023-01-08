import { useDynamicSvgImport } from '@/hooks/useDynamicSvgImport'
import { SVGProps } from 'react'

interface IProps {
  iconName: string
  wrapperStyle?: string
  svgProp?: SVGProps<SVGSVGElement>
}

function Icon(props: IProps) {
  const { iconName, wrapperStyle, svgProp } = props
  const { loading, SvgIcon } = useDynamicSvgImport(iconName)

  return (
    <>
      {loading && (
        <div className='rounded-full bg-slate-400 animate-pulse h-8 w-8'></div>
      )}
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProp} />
        </div>
      )}
    </>
  )
}

export default Icon
