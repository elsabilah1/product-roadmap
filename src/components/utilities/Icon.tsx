import { useDynamicSvgImport } from '@/hooks/useDynamicSvgImport'
import { SVGProps } from 'react'

interface IProps {
  iconName: string
  wrapperStyle?: string
  className?: string
  svgProp?: SVGProps<SVGSVGElement>
}

function Icon(props: IProps) {
  const { iconName, wrapperStyle, svgProp, className } = props
  const { loading, SvgIcon } = useDynamicSvgImport(iconName)

  return (
    <>
      {loading && (
        <div className='rounded-full bg-slate-400 animate-pulse h-4 w-4'></div>
      )}
      {SvgIcon && (
        <div className={wrapperStyle}>
          <SvgIcon {...svgProp} className={className} />
        </div>
      )}
    </>
  )
}

export default Icon
