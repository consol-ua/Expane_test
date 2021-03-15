import { FC } from 'react'
import { SpinnerSmall } from 'ui/SpinnerSmall'

export interface ButtonProps {
  type?: 'primary' | 'outline'
  className?: string
  onClick?: () => void
  disabled?: boolean
  spinner?: boolean
}
export const Button: FC<ButtonProps> = ({
  className,
  type = 'primary',
  disabled,
  spinner,
  children,
  ...props
}) => {
  let styles =
    'inline-flex items-center justify-center rounded-md border shadow-sm px-4 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 w-auto text-sm '

  if (disabled) styles += 'cursor-default '

  if (type === 'primary') {
    styles += 'border-transparent text-white '

    if (disabled) {
      styles += 'bg-primary-200 '
    } else {
      styles += 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 '
    }
  } else if (type === 'outline') {
    styles += 'bg-white '

    if (disabled) {
      styles += 'border-gray-100 text-gray-300 '
    } else {
      styles += 'border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-primary-500 '
    }
  }

  if (className) styles += className

  return (
    <button className={styles} disabled={disabled} {...props}>
      {children}
      {spinner && <SpinnerSmall color={type === 'primary' ? '#fff' : '#000'} className="ml-1" />}
    </button>
  )
}
