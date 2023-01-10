interface IProps {
  progress: number
}

function ProgressBar({ progress }: IProps) {
  return (
    <input
      type='range'
      min={0}
      max={100}
      value={progress}
      className={`${
        progress === 100 && 'completedProgress'
      } progress appearance-none h-4 p-0 bg-[#EDEDED] rounded-lg overflow-hidden w-full`}
      disabled
    />
  )
}

export default ProgressBar
