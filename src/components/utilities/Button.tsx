import { cva, VariantProps } from 'class-variance-authority'

const buttonClasses = cva(
  'flex items-center gap-1 text-xs font-bold py-2 px-4 rounded-lg shadow',
  {
    variants: {
      intent: {
        primary:
          'bg-[#01959F] text-white border border-[#01959F] hover:bg-[#01959F]/70 hover:border-transparent',
        secondary: [
          'bg-[#E11428] text-white border border-[#E11428] hover:bg-[#E11428]/70 hover:border-transparent',
        ],
        outline: 'text-black border border-[#E0E0E0] hover:bg-[#E0E0E0]',
        text: 'text-black',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
)

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

function Button({ children, className, intent, ...props }: ButtonProps) {
  return (
    <button className={buttonClasses({ intent, className })} {...props}>
      {children}
    </button>
  )
}

export default Button
