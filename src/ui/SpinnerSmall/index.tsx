import React, { FC } from 'react'
import './SpinnerSmall.css'

export interface SpinnerSmallProps {
  color?: string
  className?: string
}
export const SpinnerSmall: FC<SpinnerSmallProps> = ({ color = '#00b075', className }) => {
  return (
    <div
      className={'expane-spinner-small ' + className ?? ''}
      // @ts-ignore
      style={{ '--color': color }}
    />
  )
}
