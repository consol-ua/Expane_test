import { FC } from 'react'
import './Spinner.css'

export interface SpinnerProps {
  className?: string
  expandCentered?: boolean
}
export const Spinner: FC<SpinnerProps> = ({ className, expandCentered }) => {
  const spinner = (
    <div className={'expane-spinner ' + className ?? ''}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )

  return expandCentered ? (
    <div className="flex flex-1 justify-center items-center">{spinner}</div>
  ) : (
    spinner
  )
}
